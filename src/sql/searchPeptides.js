import axios from "axios";
import { colNames } from "./sql.util";

const getAdvancedQuery = params => {
    let condition = Object.entries(params).filter(item => item[0] !== 'type' && item[0] !== 'Sequence')
        .map(item => `${item[1] ?
            item[1] !== "reported" ?
                item[0] === "Family" ?
                    `Family LIKE '%${item[1]}%'`
                    : `${item[0]}='${item[1]}'`
                : `${item[0]} IS NOT NULL`
            : ""
            }`).filter(condition => !!condition).join(" AND ");
    if (params.Sequence) {
        // const q = `${params.type === "exact" ?
        //     `Sequence='${params.Sequence}'` :
        //     `Sequence LIKE '%${params.Sequence}%'`
        //     }`;
        // if (condition) condition += ` AND ${q}`;
        // else condition = q;
    }
    return `SELECT
    ID,Name,Year,PubmedID,Sequence,Target,Species,NatureType
    FROM master
    WHERE ${condition ? condition : "TRUE"};`;
}

export const searchPeptides = (elements, isAdvanced, dataCallback, colsCallback) => {
    let params = {};
    for (const el of elements) params[el.name] = el.value;
    delete params.submit;
    const data = {
        "query": isAdvanced ?
            getAdvancedQuery(params) :
            `SELECT ID,Name,Year,PubmedID,Sequence,Target,Species,NatureType FROM master ${params.type === "exact" ?
                `WHERE Sequence='${params.Sequence}'` :
                `WHERE Sequence LIKE '%${params.Sequence}%'`
            };`
    };
    console.log(data);
    const config = {
        method: 'post',
        url: 'https://3v3bd3qzhk.execute-api.us-east-2.amazonaws.com/query_sql',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };
    axios(config).then(result => {
        if (result.data?.length)
            colsCallback(Object.keys(result.data[0]).filter(key => key !== "ID").map(
                key => ({ name: colNames[key], key })
            ))
        dataCallback(result.data.map(item => ({
            ...item,
            Family: item.Family ?
                item.Family.charAt(0).toUpperCase() + item.Family.slice(1) : ""
        })));
    }).catch(err => dataCallback([]))
}
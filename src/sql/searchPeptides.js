import axios from "axios";
import { colNames } from "./sql.util";

const getAdvancedQuery = params => {
    let cols = null;
    if (params.cols) {
        cols = params.cols.map(col => `${col} IS NOT NULL`).join(" AND ");
        delete params.cols;
    }
    let condition = Object.entries(params).filter(item => item[0] !== 'type' && item[0] !== 'Sequence')
        .map(item => `${item[0]}='${item[1]}'`)?.join(" AND ");
    if (params.Sequence) {
        const q = `${params.type === "exact" ?
            `Sequence='${params.Sequence}'` :
            `Sequence LIKE '%${params.Sequence}%'`
            }`;
        if (condition) condition += ` AND ${q}`;
        else condition = q;
    }
    return `SELECT
    ID,Name,Year,PubmedID,Sequence,Target,Species,NatureType
    FROM master
    WHERE ${condition ? condition : "TRUE"} AND ${cols ? cols : "TRUE"};`;
}

export const searchPeptides = (elements, isAdvanced, dataCallback, colsCallback) => {
    const params = {};
    let colsChecked = false;
    for (const el of elements) {
        if (!el.name) continue;
        if (elements[el.name].value)
            params[el.name] = elements[el.name].value;
        else if (!colsChecked && el.name === "cols") {
            params[el.name] = [];
            for (const node of elements[el.name]) {
                if (node.checked)
                    params[el.name].push(node.value);
            }
            colsChecked = true
        }
    };
    delete params.submit;
    const data = {
        "query": isAdvanced ?
            getAdvancedQuery(params) :
            `SELECT ID,Name,Year,PubmedID,Sequence,Target,Species,NatureType FROM master ${params.type === "exact" ?
                `WHERE Sequence='${params.Sequence}'` :
                `WHERE Sequence LIKE '%${params.Sequence}%'`
            };`
    };
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
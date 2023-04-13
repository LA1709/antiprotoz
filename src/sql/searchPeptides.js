import axios from "axios";
import { colNames } from "./sql.util";

const getAdvancedQuery = (params, isAdvanced) => {
    let condition = Object.entries(params).filter(item => !item[0].match(/^type|^Sequence|SEQ_/))
        .map(item => `${item[1] ?
            item[1] !== "reported" ?
                item[0] === "Family" ?
                    `Family LIKE '%${item[1]}%'`
                    : `${item[0]}='${item[1]}'`
                : `${item[0]} IS NOT NULL`
            : ""
            }`).filter(condition => !!condition).join(" AND ");
    if (params.Sequence) {
        if (!isAdvanced) {
            const q = `${params.type === "exact" ?
                `Sequence='${params.Sequence}'` :
                `Sequence LIKE '%${params.Sequence}%'`
                }`;
            if (condition) condition += ` AND ${q}`;
            else condition = q;
        } else {
            let q = "";
            if (!!params['SEQ_Length'])
                q += `LENGTH(Sequence)=${params['SEQ_Length']}`;
            const keys = Object.keys(params).filter(key =>
                key.match(/SEQ_0/)
            ).sort((a, b) => params[a] - params[b]);
            let regex = "";
            for (let i = 0; i < keys.length; i++) {
                const name = keys[i].replace(/SEQ_.*/, "");
                if (!params[keys[i]]) {
                    condition += `${condition ? " AND " : ""}Sequence LIKE '%${name}%'`;
                    continue;
                }
                const diff = params[keys[i]] - (params[keys[i - 1]] ?? 0);
                if (diff === 1) {
                    regex += name;
                    continue;
                }
                if (diff === 2) regex += ".";
                else regex += `.{${diff - 1}}`;
                regex += name;
            }
            if (params['SEQ_Length']) {
                const diff = params['SEQ_Length'] - keys[keys.length - 1];
                if (diff > 0)
                    regex += `.{${diff}}`;
            }
            q += `${q ? " AND " : ""}Sequence REGEXP '${regex}'`;
            if (condition) condition += ` AND ${q}`;
            else condition = q;
        }
    }
    return `SELECT
    ID,Name,Year,PubmedID,Sequence,Target,Species,NatureType
    FROM master
    WHERE ${condition ? condition : "TRUE"};`;
}

export const searchPeptides = (elements, isAdvanced, dataCallback, colsCallback) => {
    let params = {};
    for (const el of elements) {
        if (el.name !== "type")
            params[el.name] = el.value;
        else if (el.checked)
            params.type = el.value;
    }
    delete params.submit;
    console.log(params);
    const data = {
        "query": getAdvancedQuery(params, isAdvanced)
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
import axios from "axios";
import { colNames } from "./sql.util";

export const browsePeptides = (elements, dataCallback, colsCallback) => {
    const params = {};
    for (const el of elements) {
        if (el.checked) {
            if (!params[el.name]) params[el.name] = [];
            params[el.name].push(el.value);
        }
    }
    const q = `(${Object.entries(params).map(item =>
        `${item[0]} LIKE '%${item[1].join(`%' OR ${item[0]} LIKE '%`)}%'`
    ).join(") AND (")})`;
    const data = {
        "query": `SELECT
            ID,Name,Year,PubmedID,Sequence,NatureType,Family,Target,Species
            FROM master WHERE ${q === "()" ? "TRUE" : q}
        ;`
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
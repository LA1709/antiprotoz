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
        `${item[0]}='${item[1].join(`' OR ${item[0]}='`)}'`
    ).join(") AND (")})`;
    const data = {
        "query": `SELECT
            Name,Year,PubmedID,Sequence,Source,Family,Target
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
            colsCallback(Object.keys(result.data[0]).map(
                key => ({ name: colNames[key], key })
            ))
        dataCallback(result.data);
    }).catch(err => dataCallback([]))
}
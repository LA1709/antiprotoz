import axios from "axios";
import { colNames } from "./sql.util";

const getAdvancedQuery = params => {
    const cols = params.cols.join();
    delete params.cols;
    const condition = Object.entries(params).filter(item => !!item[1])
        .map(item => `${item[0]}='${item[1]}'`).join(" AND ");
    return `SELECT
    Name,Year,PubmedID,Source,${cols}
    FROM master
    WHERE ${condition ? condition : "TRUE"};`;
}

export const searchPeptides = (elements, isAdvanced, dataCallback, colsCallback) => {
    const params = {};
    let listChecked = false;
    for (const el of elements) {
        if (isAdvanced && elements[el.name]?.length && !listChecked) {
            for (const node of elements[el.name]) {
                if (node.checked) {
                    if (!params[node.name])
                        params[node.name] = [];
                    params[node.name].push(node.value);
                }
            }
            listChecked = true;
        }
        else if (!(isAdvanced && elements[el.name]?.length))
            params[el.name] = elements[el.name]?.value;
    };
    delete params.submit;
    const data = {
        "query": isAdvanced ?
            getAdvancedQuery(params) :
            params.type === "exact" ? `SELECT Name,Year,PubmedID,Source FROM master WHERE Sequence='${params.Sequence}';`
                : `SELECT Name,Year,PubmedID,Source FROM master WHERE Sequence LIKE '%${params.Sequence}%';`
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
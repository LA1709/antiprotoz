import axios from "axios";

const getAdvancedQuery = params => `SELECT * FROM master;`;

export const searchPeptides = (elements, isAdvanced, dataCallback, colsCallback) => {
    const params = {};
    let listChecked = false;
    for (const el of elements) {
        if (isAdvanced && elements[el.name].length && !listChecked) {
            for (const node of elements[el.name]) {
                if (node.checked) {
                    if (!params[node.name])
                        params[node.name] = [];
                    params[node.name].push(node.value);
                }
            }
            listChecked = true;
        }
        else if (!(isAdvanced && elements[el.name].length))
            params[el.name] = elements[el.name].value;
    };
    const data = {
        "query": isAdvanced ?
            getAdvancedQuery(params) :
            params.type === "exact" ? `SELECT * FROM master WHERE Sequence='${params.sequence.toUpperCase()}';`
                : `SELECT * FROM master WHERE Sequence LIKE '%${params.sequence.toUpperCase()}%';`
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
                key => ({ name: key, key })
            ))
        dataCallback(result.data);
    }).catch(err => dataCallback([]))
}
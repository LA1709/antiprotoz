import axios from "axios";

export const fetchPeptide = (id, callback) => {
    const data = {
        "query": `SELECT * FROM master WHERE ID='${id}';`
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
        callback(result.data);
    }).catch(err => callback([]))
}
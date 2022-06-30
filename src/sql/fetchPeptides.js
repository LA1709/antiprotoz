import axios from "axios";

export const fetchPeptides = (idList, callback) => {
    const data = {
        "query": `SELECT * FROM master WHERE ID IN ('${idList.join("','")}');`
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
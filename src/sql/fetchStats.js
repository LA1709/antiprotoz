import axios from "axios";

export const fetchStats = (callback) => {
    const data = {
        "query": `
        SELECT COUNT(*) FROM master;
        SELECT COUNT(DISTINCT(Name)) FROM master;
        SELECT COUNT(DISTINCT(PubmedID)) FROM master;
        SELECT COUNT(*) FROM master WHERE Type='Free Living';
        SELECT COUNT(*) FROM master WHERE Type='Parasitic';
        `
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
        callback(result.data.map(res => Object.values(res[0])[0].toLocaleString()))
    }).catch(err => {
        console.log(err);
        callback([]);
    })
};
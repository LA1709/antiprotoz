import axios from "axios";

export const fetchCharts = (callback) => {
    const data = {
        "query": `
        SELECT COUNT(*),NatureType FROM master GROUP BY NatureType;
        SELECT COUNT(*),Disease FROM master GROUP BY Disease;
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
        const sources = result.data[0].filter(row => !!row.NatureType);
        const diseases = result.data[1].filter(row => !!row.Disease);
        callback({
            sources,
            diseases
        })
    }).catch(err => {
        console.log(err);
        callback({});
    })
}
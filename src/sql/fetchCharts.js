import axios from "axios";

const getDiseaseGroup = (disease) => {
    if (disease.match(/Cryptosporidiosis/i))
        return 'Cryptosporidiosis';
    if (disease.match(/Toxoplasmosis/i))
        return 'Toxoplasmosis';
    if (disease.match(/Leishmaniasis/i))
        return 'Leishmaniasis';
    if (disease.match(/trypanosomiasis/i))
        return 'trypanosomiasis';
    if (disease.match(/Trichomoniasis/i))
        return 'Trichomoniasis';
    if (disease.match(/Malaria/i))
        return 'Malaria';
    return 'Others';
}

export const fetchCharts = (callback) => {
    const data = {
        "query": `
        SELECT COUNT(*) AS COUNT,NatureType FROM master GROUP BY NatureType;
        SELECT COUNT(*) AS COUNT,Disease FROM master GROUP BY Disease;
        SELECT COUNT(*) AS COUNT,Target FROM master GROUP BY Target;
        SELECT COUNT(DISTINCT(PubmedID)) AS COUNT,Year FROM master GROUP BY Year;
        SELECT COUNT(*) AS COUNT,Type FROM master GROUP BY Type;
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
        const diseases = Object.entries(result.data[1].filter(row => !!row.Disease).reduce((prev, curr) => {
            const group = getDiseaseGroup(curr.Disease);
            return {
                ...prev,
                [group]: (prev[group] ?? 0) + curr['COUNT']
            }
        }, {})).map(item => ({
            Disease: item[0],
            COUNT: item[1],
        }));
        const peptides = result.data[2].filter(row => !!row.Target);
        const years = result.data[3].filter(row => !!row.Year);
        const types = result.data[4].filter(row => !!row.Type);
        callback({
            sources,
            diseases,
            peptides,
            years,
            types,
        })
    }).catch(err => {
        console.log(err);
        callback({});
    })
};
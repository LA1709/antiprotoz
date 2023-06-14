import axios from "axios";
import { getFamilyGroup } from "./sql.util";

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
};

export const fetchCharts = (callback) => {
    const data = {
        "query": `
        SELECT COUNT(*) AS COUNT,NatureType FROM master GROUP BY NatureType;
        SELECT COUNT(*) AS COUNT,Disease FROM master GROUP BY Disease;
        SELECT COUNT(*) AS COUNT,Target FROM master GROUP BY Target;
        SELECT COUNT(DISTINCT(PubmedID)) AS COUNT,Year FROM master GROUP BY Year;
        SELECT COUNT(*) AS COUNT,Type FROM master GROUP BY Type;
        SELECT COUNT(*) AS COUNT,Family FROM master GROUP BY Family;
        SELECT NTerminal,CTerminal,Modification FROM master;
        SELECT COUNT(*) AS COUNT,Chirality FROM master GROUP BY Chirality;
        SELECT COUNT(*) AS COUNT,Encoding FROM master GROUP BY Encoding;
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
        const families = Object.entries(result.data[5].filter(row => !!row.Family).reduce((prev, curr) => {
            const group = getFamilyGroup(curr.Family);
            return {
                ...prev,
                [group]: (prev[group] ?? 0) + curr['COUNT']
            }
        }, {})).map(item => ({
            Family: item[0],
            COUNT: item[1],
        }));
        const modifications = result.data[6].reduce((prev, curr) => ({
            NTerminal: curr.NTerminal ? {
                Yes: prev.NTerminal.Yes + (curr.NTerminal === "Free" ? 0 : 1),
                No: prev.NTerminal.No + (curr.NTerminal === "Free" ? 1 : 0),
            } : prev.NTerminal,
            CTerminal: curr.CTerminal ? {
                Yes: prev.CTerminal.Yes + (curr.CTerminal === "Free" ? 0 : 1),
                No: prev.CTerminal.No + (curr.CTerminal === "Free" ? 1 : 0),
            } : prev.CTerminal,
            Modification: {
                Yes: prev.Modification.Yes + (curr.Modification === "None" ? 0 : 1),
                No: prev.Modification.No + (curr.Modification === "None" ? 1 : 0),
            },
        }), {
            NTerminal: {
                Yes: 0,
                No: 0,
            },
            CTerminal: {
                Yes: 0,
                No: 0,
            },
            Modification: {
                Yes: 0,
                No: 0,
            },
        });
        const chirality = result.data[7].filter(row => !!row.Chirality);
        const encoding = result.data[8].filter(row => !!row.Encoding);

        callback({
            sources,
            diseases,
            peptides,
            years,
            types,
            families,
            modifications,
            chirality,
            encoding,
        });
    }).catch(err => {
        console.log(err);
        callback({});
    })
};
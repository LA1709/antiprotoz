import axios from "axios";
import { getDiseaseGroup, getFamilyGroup } from "./sql.util";

const groupDataCount = (data, colName, filter) => {
    return Object.entries(data.filter(row => !!row[colName]).reduce((prev, curr) => {
        const group = filter(curr[colName]);
        return {
            ...prev,
            [group]: (prev[group] ?? 0) + curr['COUNT']
        }
    }, {})).map(item => ({
        [colName]: item[0],
        COUNT: item[1],
    }));
}

export const fetchCharts = (callback) => {
    const data = {
        "query": `
        SELECT COUNT(*) AS COUNT,NatureType FROM master GROUP BY NatureType;
        SELECT COUNT(*) AS COUNT,Disease FROM master GROUP BY Disease;
        SELECT COUNT(*) AS COUNT,Target FROM master GROUP BY Target;
        SELECT COUNT(DISTINCT(PubmedID)) AS COUNT,Year FROM master GROUP BY Year;
        SELECT COUNT(*) AS COUNT,Type FROM master GROUP BY Type;
        SELECT COUNT(*) AS COUNT,Family FROM master GROUP BY Family;
        SELECT COUNT(*) AS COUNT,Chirality FROM master GROUP BY Chirality;
        SELECT COUNT(*) AS COUNT,Encoding FROM master GROUP BY Encoding;
        SELECT COUNT(*) AS COUNT,NTerminal FROM master GROUP BY NTerminal;
        SELECT COUNT(*) AS COUNT,CTerminal FROM master GROUP BY CTerminal;
        SELECT COUNT(*) AS COUNT,Modification FROM master GROUP BY Modification;
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
        const diseases = groupDataCount(result.data[1], 'Disease', getDiseaseGroup);
        const peptides = result.data[2].filter(row => !!row.Target);
        const years = result.data[3].filter(row => !!row.Year);
        const types = result.data[4].filter(row => !!row.Type);
        const families = groupDataCount(result.data[5], 'Family', getFamilyGroup);
        const chirality = result.data[6].filter(row => !!row.Chirality);
        const encoding = result.data[7].filter(row => !!row.Encoding);
        const NTerminal = groupDataCount(result.data[8], 'NTerminal', (value) => {
            if (value.match(/Free|Acetyl/)) return value;
            else return 'Other Modification';
        });
        const CTerminal = groupDataCount(result.data[9], 'CTerminal', (value) => {
            if (value.match(/Free|Carboxamide/)) return value;
            else return 'Other Modification';
        });
        const Modification = groupDataCount(result.data[10], 'Modification', (value) => {
            if (value.match(/Free|Ornithine|Trimethylation/)) return value;
            else return 'Other Modification';
        });

        callback({
            sources,
            diseases,
            peptides,
            years,
            types,
            families,
            chirality,
            encoding,
            modifications: {
                CTerminal,
                NTerminal,
                Modification,
            },
        });
    }).catch(err => {
        console.log(err);
        callback({});
    })
};
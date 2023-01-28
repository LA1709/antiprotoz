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
};

const getFamilyGroup = (family) => {
    if (family.match(/defensin/i))
        return 'defensin family';
    if (family.match(/frog/i))
        return 'frog skin active peptide (FSAP) family';
    if (family.match(/gastrin/i))
        return 'gastrin/cholecystokinin family';
    if (family.match(/long chain scorpion/i))
        return 'long chain scorpion toxin family';
    if (family.match(/mcd/i))
        return 'MCD family';
    if (family.match(/non-disulfide-bridged/i))
        return 'non-disulfide-bridged peptide (NDBP) superfamily';
    return family;
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
        SELECT NTerminal,CTerminal,Modification FROM master;
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
            NTerminal: {
                Yes: (prev.NTerminal?.Yes ?? 0) + (curr.NTerminal === "Free" ? 0 : 1),
                No: (prev.NTerminal?.No ?? 0) + (curr.NTerminal === "Free" ? 1 : 0),
            },
            CTerminal: {
                Yes: (prev.CTerminal?.Yes ?? 0) + (curr.CTerminal === "Free" ? 0 : 1),
                No: (prev.CTerminal?.No ?? 0) + (curr.CTerminal === "Free" ? 1 : 0),
            },
            Modification: {
                Yes: (prev.Modification?.Yes ?? 0) + (curr.Modification === "None" ? 0 : 1),
                No: (prev.Modification?.No ?? 0) + (curr.Modification === "None" ? 1 : 0),
            },
        }), {});
        callback({
            sources,
            diseases,
            peptides,
            years,
            types,
            families,
            modifications,
        })
    }).catch(err => {
        console.log(err);
        callback({});
    })
};
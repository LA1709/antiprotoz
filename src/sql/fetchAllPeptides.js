import axios from "axios";
import { colNames } from "./sql.util";

export const fetchAllPeptides = (dataCallback, colsCallback) => {
    const data = {
        "query": `SELECT ID,Name,Year,PubmedID,Sequence,Target,Species,Source,PI FROM master;`
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
            colsCallback(Object.keys(result.data[0]).filter(key => key !== "ID").map(
                key => ({ name: colNames[key], key })
            ))
        dataCallback(result.data);
    }).catch(err => dataCallback([]))
}
import axios from "axios";
import { colNames } from "./sql.util";

const tableMap = [
    'minmax',
    'catminmax',
]

export const getPeptides = (inputData, inputType, dataCallback, colsCallback) => {
    const q = `(${Object.entries(inputData).map(item =>
        `${item[0]} BETWEEN ${item[1][0]} and ${item[1][1]}`
    ).join(") AND (")})`;
    const data = {
        "query": `SELECT
            master.ID,Name,Year,PubmedID,Sequence,Source,Family,Target,Species
            FROM master,${tableMap[inputType]} WHERE
            master.ID=${tableMap[inputType]}.ID AND ${q === "()" ? "TRUE" : q};`
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
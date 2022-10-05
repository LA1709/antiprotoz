import axios from "axios";

export const deleteData = (id, callback) => {
    let q = `DELETE from master where ID='${id}'`;
    const config = {
        method: 'post',
        url: 'https://3v3bd3qzhk.execute-api.us-east-2.amazonaws.com/query_sql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            query: q
        },
    };
    axios(config).then(result =>
        callback(true)
    ).catch(err =>
        callback(false)
    );
}
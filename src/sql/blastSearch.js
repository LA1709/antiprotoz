import axios from "axios";

export const blast = (elements, callback) => {
    const data = {};
    for (const element of elements) {
        data[element.name] = element.value
    }
    const config = {
        method: 'post',
        url: 'https://hq7qk3r3o8.execute-api.us-east-2.amazonaws.com/blastP',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };
    axios(config).then(res => {
        callback(res.data.replaceAll(/\n\s*Database:.*\n,*.fa\n/g, ""))
    }).catch(err => {
        callback(null);
    })
}
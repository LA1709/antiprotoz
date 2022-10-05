import axios from "axios";

export const insertData = (elements, callback) => {
    let q = "INSERT INTO master VALUES (";
    let t = [];
    for (const el of elements) {
        if (el.name !== "submit") {
            const val = el.value ? `${el.value}`.replaceAll(/'|;|\\/g, "") : null;
            t.push(
                val ? ['Length', 'Charge'].includes(el.name)
                    ? `${val}`
                    : `'${val}'`
                    : `NULL`
            );
        }
    }
    q += t.join(", ") + ");";
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
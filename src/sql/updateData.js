import axios from "axios";

export const updateData = (elements, callback) => {
    let q = "UPDATE master SET ";
    let c = "";
    let t = [];
    for (const el of elements) {
        if (el.value && el.name !== "submit") {
            const val = `${el.value}`.replaceAll(/'|;|\\/g, "")
            if (el.name === "ID")
                c = ` WHERE ID='${val}';`;
            else t.push(
                ['Length', 'Charge', 'PI'].includes(el.name)
                    ? `${el.name}=${val}`
                    : `${el.name}='${val}'`
            );
        }
    }
    q += t.join(", ") + c;
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
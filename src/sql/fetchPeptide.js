import axios from "axios";

export const fetchPeptide = (id, callback) => {
    axios.get("https://run.mocky.io/v3/6c5e5097-32da-427d-9cca-89fa47aa8486")
        .then(result => callback(result.data))
        .catch(err => {
            console.log(err);
            callback(null);
        })
}
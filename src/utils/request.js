import axios from "axios";
import Config from "react-native-config";

export const request = ({url, method, data, headers}) => {
    console.log("headers", headers); 
    return axios({
        method: method || "get",
        url: `${Config.API_BASE_URL}${url}`,
        data,
        headers,
    });
}

export const addTokenToAxios = async (token) => {
    axios.defaults.headers.authorization = token;
}
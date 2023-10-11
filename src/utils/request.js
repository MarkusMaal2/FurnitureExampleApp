import axios from "axios";
import Config from "react-native-config";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const request = ({url, method, data, headers}) => {
    console.log("headers", headers); 
    axios({
        method: method || "get",
        url: `${Config.API_BASE_URL}${url}`,
        data,
        headers,
    });
}

export const addTokenToAxios = (token) => {
    console.log("added token (", token, ") to axios!")
    axios.defaults.headers.Authorization = token;
}
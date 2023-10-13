import { request } from "./request";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export const getProfile = async() => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get',
            headers: axios.defaults.headers,
        });
        console.log(response);

        if (response) {
            return response?.data;
        }
    } catch (ex) {
        console.log('profile exception :>> ', ex);
        
    }
}
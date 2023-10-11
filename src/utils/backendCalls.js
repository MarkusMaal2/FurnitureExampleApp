import { request } from "./request";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProfile = async() => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get',
        })

        if (response) {
            return response?.data;
        }
    } catch (ex) {
        console.log('profile exception :>> ', ex);
    }
}
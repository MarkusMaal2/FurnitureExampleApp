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

        if (response) {
            return response?.data;
        }
    } catch (ex) {
        console.log('profile exception :>> ', ex);
        
    }
}

export const updateProfile = async (data) => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'patch',
            data,
            headers: axios.defaults.headers,
        });

        if (response) {
            const profile = await getProfile()
            return profile;
        }
    } catch (ex) {
        console.log('profile exception :>> ', ex);
    }
}

export const getServices = async() => {
    try {
        const response = await request({
            url: '/services',
            method: 'get',
            headers: axios.defaults.headers,
        });

        if (response) {
            console.log("Response data:", response?.data);
            return response?.data;
        }
    } catch (ex) {
        console.log('services exception :>> ', ex.response);
    }
}

export const addService = async (data) => {
    try {
        const formData = new FormData();
        const objKeys = Object.keys(data);
        console.log('objKeys :>> ', objKeys);
        objKeys.forEach(key => {
            formData.append(key, data[key]);
        });
        const response = await request({
            url: '/services',
            method: 'post',
            headers: {
                'Content-Type' : 'multipart/form-data',
            },
            data: formData,
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (ex) {
        console.log('ex add services :>> ', ex.response);
    }
}
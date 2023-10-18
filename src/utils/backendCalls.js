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
        const profile = await getProfile();
        console.log('objKeys :>> ', objKeys);
        formData.append("owner", profile.id);
        const response = await request({
            url: '/services',
            method: 'post',
            data: data,
            headers: axios.defaults.headers,
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (ex) {
        console.log('ex add services :>> ', ex.response);
    }
}

export const deleteService = async (id) => {
    try {
        const response = await request({
            url: '/services',
            method: 'delete',
            data: {
                servicesId: id,
            }
        })

        if(response) {
            const services = await getServices();
            return services;
        }
    } catch (ex) {
        console.log('ex services :>> ', ex.response);
    }
}

export const updateService = async(id, data) => {
    try {
        const response = await request({
            url: '/services',
            method: 'patch',
            data: {
                servicesId: id,
                ...data,
            }
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (ex) {
        console.log('e services :>> ', ex.response);
    }
}
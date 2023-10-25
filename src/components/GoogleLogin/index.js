import React, {useContext, useState} from "react";
import { styles } from "./styles"
import { TouchableOpacity, Image } from "react-native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import axios from "axios";
import Config from "react-native-config";
import { UserContext } from "../../../App";


const GoogleLogin = () => {
    const {user, setUser} = useContext(UserContext);
    const [values, setValues] = useState({});
    const signIn = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(
                'userInfo => ', userInfo 
            )
            setValues({email: userInfo.user.email, password: userInfo.user.id});
            setUser(null)
            axios.post(Config.API_BASE_URL + '/user/login', values)
            .then(async (response) => {
                const accessToken = response?.data?.accessToken;
                setUser({accessToken});
                if (response?.data?.token) {
                    await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
                }
            })
            .catch(error => {
                console.log("e.attemptSignIn => ", error)
                let uname = userInfo.user.name;
                axios.post(Config.API_BASE_URL + "/user/register", {...values, uname})
                .then(response => {
                    console.log("signup => ", response);
                    axios.post(Config.API_BASE_URL + '/user/login', values)
                    .then(async (response) => {
                        const accessToken = response?.data?.accessToken;
                        setUser({accessToken});
                        if (response?.data?.token) {
                            await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
                        }
                    })
                    .catch(error => {
                        console.log("e.signIn => ", error)
                    })
                })
                .catch(error => {
                    console.error("e.signUp => ", error);
                })
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("Sign in cancelled");
            }
            else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("In progress");
            }
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Play Services not available");
            }
            else {
                console.log(error);
            }
        }
    }
    return (
        <TouchableOpacity onPress={signIn} activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

export default GoogleLogin;
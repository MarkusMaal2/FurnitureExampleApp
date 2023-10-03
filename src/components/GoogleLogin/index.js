import React from "react";
import { styles } from "./styles"
import { TouchableOpacity, Image } from "react-native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleLogin = () => {
    const signIn = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(
                'userInfo => ', userInfo 
            )
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
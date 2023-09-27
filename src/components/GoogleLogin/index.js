import React from "react";
import { styles } from "./styles"
import { TouchableOpacity, Image } from "react-native";

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

export default GoogleLogin;
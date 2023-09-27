import React from "react";
import {View, Text, Image} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
        </View>
    )
}

export default SignUp;
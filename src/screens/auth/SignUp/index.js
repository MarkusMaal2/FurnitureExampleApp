import React from "react";
import {View, Text, Image} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"></Input>
            <Input label="E-mail" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="**********"></Input>
        </View>
    )
}

export default SignUp;
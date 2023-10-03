import React, {useState} from "react";
import {View, Text, Image} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = ({navigation}) => {
    const [checked, setChecked] = useState(true);

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In"/>
                <Input label="E-mail" placeholder="example@gmail.com"></Input>
                <Input isPassword label="Password" placeholder="**********"></Input>
                <Button style={styles.button} title="Sign In"></Button>
                <Separator text="Or sign in with"></Separator>
                <GoogleLogin/>
                <Text style={styles.footerText}>Don't have an account?&nbsp;
                <Text style={styles.footerLink}>Sign Up</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;
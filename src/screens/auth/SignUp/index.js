import React, {useContext, useState} from "react";
import {View, Text, Image, Alert} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Config from "react-native-config";
import { UserContext } from "../../../../App";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const {user, setUser} = useContext(UserContext);

    const onBack = () => {
        navigation.goBack();
    }

    const onSignin = () => {
        navigation.navigate("SignInScreen");
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}));
    }
    
    const onSubmit = () => {
        if (!values?.fullName || !values?.email || !values?.password) {
            Alert.alert('All fields are required!');
            return;
        }
        if (!checked) {
            Alert.alert("Please agree with the terms");
            return;
        }
        console.log(Config.API_BASE_URL)
        axios.post(Config.API_BASE_URL + "/user/register", values)
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
                console.log(error)
            })
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up"/>
                <Input label="Name" placeholder="John Doe" value={values.fullName} onChangeText={(v) => onChange('fullName', v)}></Input>
                <Input label="E-mail" placeholder="example@gmail.com" value={values.email} onChangeText={(v) => onChange('email', v)}></Input>
                <Input isPassword label="Password" placeholder="**********" value={values.password} onChangeText={(v) => onChange('password', v)}></Input>
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                    <Text style={styles.agreeText}>I agree with <Text style={styles.boldText}>Terms</Text> & <Text style={styles.boldText}>Privacy</Text></Text>
                </View>
                <Button style={styles.button} title="Sign Up" onPress={onSubmit}></Button>
                <Separator text="Or sign up with"></Separator>
                <GoogleLogin/>
                <Text style={styles.footerText}>Already have an account?&nbsp;
                <Text onPress={onSignin} style={styles.footerLink}>Sign In</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;
import React, {useState} from "react";
import {View, Text, Image} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";

const SignUp = () => {
    const [checked, setChecked] = useState(true);
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"></Input>
            <Input label="E-mail" placeholder="example@gmail.com"></Input>
            <Input isPassword label="Password" placeholder="**********"></Input>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.boldText}>Terms</Text> & <Text style={styles.boldText}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Separator text="Or sign up with"></Separator>
        </View>
    )
}

export default SignUp;
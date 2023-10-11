import React, { useContext } from "react";
import {View, Text, Image, SafeAreaView} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import { styles } from "./styles";
import { UserContext } from "../../../../App";

const Splash = ({navigation}) => {
    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
    }

    const handleSignIn = () => {
        navigation.navigate('SignInScreen');
    }

    return (

        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_screen.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You’ll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            <Button style={styles.signUpButton} title="Sign Up" onPress={handleSignUp}></Button>
            <Pressable style={styles.footerText} title="Sign In" onPress={handleSignIn}></Pressable>
        </View>
    )

}

export default Splash;
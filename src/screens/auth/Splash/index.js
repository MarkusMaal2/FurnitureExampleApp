import React from "react";
import {View, Text, Image,} from "react-native";
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import { styles } from "./styles";

const Splash = () => {
    
    const handlePress = () => {
        console.log("button is clicked " + Math.round(Math.random() * 200));
    }

    const handleSignIn = () => {
        console.log("sign in!");
    }

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_screen.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You’ll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            <Button title="Sign Up" onPress={handlePress}></Button>
            <Pressable style={styles.footerText} title="Sign In" onPress={handleSignIn}></Pressable>
        </View>
    )
}

export default Splash;
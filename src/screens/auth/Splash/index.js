import React from "react";
import {View, Text, Image,} from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    
    const handlePress = () => {
        console.log("button is clicked " + Math.round(Math.random() * 200));
    }

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_screen.png')}/>
            <Text style={styles.title}>You’ll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            <Button title="Sign Up" onPress={handlePress}></Button>
        </View>
    )
}

export default Splash;
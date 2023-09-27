import React from "react";
import {View, Text, Image,} from "react-native";
import Button from "../../../components/Button";

const Splash = () => {
    
    const handlePress = () => {
        console.log("button is clicked " + Math.round(Math.random() * 200));
    }

    return (
        <View>
            <Text>You’ll Find All you need Here!</Text>
            <Button title="Sign Up" onPress={handlePress}></Button>
        </View>
    )
}

export default Splash;
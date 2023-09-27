import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress}) => {

    return (
        <TouchableOpacity activeOpacity={20} onPress={onPress} style={styles.container}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;
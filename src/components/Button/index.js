import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Pressable = ({title, onPress, style}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={style} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Pressable;
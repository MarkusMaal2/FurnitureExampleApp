import React from "react";
import { Pressable, Image, Text, Dimensions } from "react-native";
import { styles } from "./styles";
import Config from "react-native-config";


const ProductHomeItem = ({title, image, price, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image??null}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>$ {price}</Text>
        </Pressable>
    )
}

export default ProductHomeItem;
import React from "react";
import { Pressable, Image, Text, Dimensions } from "react-native";
import { styles } from "./styles";
import Config from "react-native-config";


const ProductHomeItem = ({title, image, price, onPress}) => {
    let imageUri = (image.includes("http") && image.includes("://"))?image:`${Config.API_BASE_URL}/${image?.path}`;
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: imageUri}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>$ {price}</Text>
        </Pressable>
    )
}

export default ProductHomeItem;
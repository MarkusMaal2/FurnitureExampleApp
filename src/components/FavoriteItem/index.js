import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";

const FavoriteItem = ({title, image, price, onPress, onIconPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Pressable onPress={onIconPress}>
                <Image style={styles.icon} source={require('../../assets/close.png')}/>
            </Pressable>
        </Pressable>
    )
}

export default FavoriteItem;
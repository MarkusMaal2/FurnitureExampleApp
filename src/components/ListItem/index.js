import React from "react";
import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./styles";

const ListItem = ({title, subtitle, onPress, style}) => {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null}
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow_right.png')}/>
        </Pressable>
    )
}

export default ListItem;
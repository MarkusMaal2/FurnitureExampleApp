import React from "react";
import { Text, View, Image } from "react-native";

import { styles } from "./styles";

const ListItem = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow_right.png')}/>
        </View>
    )
}

export default ListItem;
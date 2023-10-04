import React from "react";
import {ScrollView, Text, Image, View, Pressable} from "react-native";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    
    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{uri: product?.image}}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require("../../../assets/back.png")}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require("../../../assets/nav/favorites_active.png")}/>
                </Pressable>
                <Button title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;
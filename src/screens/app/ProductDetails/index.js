import React from "react";
import {ScrollView, Text, Image, View, Pressable, Linking} from "react-native";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import ImageCarusel from "../../../components/ImageCarusel";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    
    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        let email = "markus.maal@voco.ee";
        Linking.openURL(`mailto:${email}`);
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}/>
                )}
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
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;
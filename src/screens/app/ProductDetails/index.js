import React, { useContext } from "react";
import {ScrollView, Text, Image, View, Pressable, Linking} from "react-native";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import ImageCarusel from "../../../components/ImageCarusel";
import { ServicesContext } from "../../../../App";
import { updateService } from "../../../utils/backendCalls";
import Config from "react-native-config";

const ProductDetails = ({navigation, route}) => {

    const params = route?.params || {};
    const { services, setServices } = useContext(ServicesContext);
    const product = services?.find(service => service?.id === params?.product?.id);

    
    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        let email = "markus.maal@voco.ee";
        Linking.openURL(`mailto:${email}`);
    }

    const onBookmark = async () => {
        const data = await updateService(product?.id, {liked: true});
        setServices(data);
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{uri: `${product?.image}`}}/>
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
                <Pressable style={styles.bookmarkContainer} onPress={onBookmark}>
                    <Image style={styles.bookmarkIcon} source={product?.liked ? require("../../../assets/nav/favorites_active.png") : require("../../../assets/nav/favorites.png")}/>
                </Pressable>
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;
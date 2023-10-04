import React from "react";
import {View, Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";
import { products } from "../../../data/products";

const Favorites = ({navigation}) => {
    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item});
        }
        return (
            <FavoriteItem onPress={onProductPress}
            {...item} />
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites"/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}/>
            </View>
        </SafeAreaView>
    )
}

export default Favorites;
import React from "react";
import {View, Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";
import { Alert } from "react-native";
import { products } from "../../../data/products";

const Favorites = ({navigation}) => {
    const onRemove = async () => {
        Alert.alert('Feature not implemented');
    }

    const onIconPress = () => {
        Alert.alert('Are you sure you want to remove this item from your favorites?', '', [{text: 'Yes', onPress: onRemove}, {text: 'No'}])
    }

    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item});
        }
        return (
            <FavoriteItem onPress={onProductPress} onIconPress={onIconPress}
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
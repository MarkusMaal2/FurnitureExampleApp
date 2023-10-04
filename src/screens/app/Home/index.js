import React, {useEffect, useState} from "react";
import {View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedProducts, setSelectedProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory) {
            const updatedSelectedProducts = products.filter((product) => 
                product?.category === selectedCategory);
            setSelectedProducts(updatedSelectedProducts);
        } else {
            setSelectedProducts(products);
        }
    }, [selectedCategory])

    const renderCategoryItem = ({item}) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item.id === selectedCategory}
                title={item?.title}
                image={item?.image}
            />
        )
    }

    const renderProductItem = ({item}) => {
        console.log('item => ', item);
        return (
            <ProductHomeItem {...item}></ProductHomeItem>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => {String(index)}}></FlatList>
                <FlatList data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} numColumns={2} ListFooterComponent={<View style={{height: 250}}/>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default Home;
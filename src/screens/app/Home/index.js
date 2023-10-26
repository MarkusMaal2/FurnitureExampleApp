import React, {useEffect, useState, useContext} from "react";
import {View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { getServices } from "../../../utils/backendCalls";
import { ServicesContext } from "../../../../App";

import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = ({navigation}) => {
    const [keyword, setKeyword] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedProducts, setSelectedProducts] = useState(services);
    const {services, setServices} = useContext(ServicesContext);

    useEffect(() => {
        (async() => {
            const data = await getServices();
            setServices(data);
        })()
    }, [])
    

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedSelectedProducts = services.filter((product) => 
                String(product?.category) === String(selectedCategory));
            setSelectedProducts(updatedSelectedProducts);
        } else if (selectedCategory && keyword) {
            const updatedSelectedProducts = services.filter((product) => 
                String(product?.category) === String(selectedCategory) && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedSelectedProducts = services.filter((product) => 
                product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!keyword && !selectedCategory) {
            setSelectedProducts(services);
        }
    }, [selectedCategory, keyword, services])

    const renderCategoryItem = ({item}) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item.id === selectedCategory}
                title={item?.title}
                image={item?.image}
                keyExtractor={(item => String(item._id))}
            />
        )
    }

    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails", {product})
        }
        return (
            <ProductHomeItem {...item} onPress={() => onProductPress(item)}></ProductHomeItem>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" onSearchKeyword={setKeyword} keyword={keyword} />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => {String(index)}}></FlatList>
                <FlatList data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} numColumns={2} ListFooterComponent={<View style={{height: 250}}/>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default Home;
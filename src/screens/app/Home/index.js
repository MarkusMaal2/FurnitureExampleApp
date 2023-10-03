import React from "react";
import {View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";

const Home = () => {
    const renderCategoryItem = ({item}) => {
        console.log('item => ', item);
        return (
            <CategoryBox title={item?.title} image={item?.image}/>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => {String(index)}}></FlatList>
                <Text>Home, sweet home!</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;
import React, { useState } from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import {styles} from "./styles";

const {width} = Dimensions.get('window');

const ImageCarusel = ({images}) => {
    const [page, setPage] = useState(0);
    const handleScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = horizontalOffset / width
        setPage(index);
    }
    const renderImage= ({item}) => {
        return (
            <Image style={styles.image} source={{uri: item}}></Image>
        )
    }
    return (
        <View>
            <FlatList pagingEnabled horizontal style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd} keyExtractor={(item) => {Math.random()}}/>
            <View style={styles.pagination}>
                {  images?.map((_, i) => (
                    <View key={i} style={[styles.paginationLine, i === page ? styles.activeLine : {}]}></View>
                ))}
            </View>
        </View>
    )
}

export default ImageCarusel;
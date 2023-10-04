import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";

import {launchCamera, launchImageLibrary} from "react-native-image-picker";

const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([]);

    const goBack = () => {
        navigation.goBack();
    }

    const uploadNewImage = async() => {
        const result = await launchImageLibrary();
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Header showBack onBackPress={goBack} title="Create new listing"></Header>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                    <View style={styles.uploadCircle}>
                        <Text style={styles.uploadPlus}>+</Text>
                    </View>
                </TouchableOpacity>
                {images?.map(image => {
                    <Image style={styles.image} key={image?.fileName} source={{uri: image?.uri}}/>
                })}
            </View>
        </SafeAreaView>
    )
}

export default CreateListing;
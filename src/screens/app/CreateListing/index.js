import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, Pressable, ActivityIndicator, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories } from "../../../data/categories";

import {launchCamera, launchImageLibrary} from "react-native-image-picker";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { addService } from "../../../utils/backendCalls";
import { ServicesContext } from "../../../../App";


const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});

    const {setServices} = useContext(ServicesContext);

    const goBack = () => {
        navigation.goBack();
    }

    const uploadNewImage = async() => {
        setLoading(true);
        const result = await launchImageLibrary();
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]));
        }
        setLoading(false);
    }

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({...val, [key]: value}));
    }

    const onSubmit = async () => {
        const img = images?.length ? images[0] : null;
        const data = {
            ...values,
            category: values.category?.id,
        }

        if (img) {
            data['image'] = img?.uri;
            
        }

        const updatedServices = await addService(data);
        setServices(updatedServices);
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{minHeight: "100%"}}>
        <Header showBack onBackPress={goBack} title="Create new listing"></Header>
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>
                    {images?.map(image => (
                        <View key={image?.fileName} style={styles.imageContainer}>
                            <Image style={styles.image} key={image?.fileName} source={{uri: image?.uri}}/>
                            <Pressable onPress={() => onDeleteImage(image)} hitSlop={20}>
                                <Image style={styles.delete} source={require('../../../assets/close.png')}/>
                            </Pressable>
                        </View>
                    ))}
                    {loading ? (<ActivityIndicator style={styles.loader}/>) : null}
                </View>
                <Input label="Title" placeholder="Listing Title" value={values.title} onChangeText={(v) => onChange(v, 'title')}/>
                <Input label="Category" placeholder="Select the category" value={values.category}  onChangeText={(v) => onChange(v, 'category')} type={"picker"} options={categories}/>
                <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                <Input label="Description" placeholder="Tell us more..." value={values.description} onChangeText={(v) => onChange(v, 'description')} style={styles.textarea} multiline/>
                <Button title="Submit" onPress={onSubmit}/>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default CreateListing;
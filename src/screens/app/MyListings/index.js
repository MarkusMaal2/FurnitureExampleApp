import React, {useContext} from "react";
import {FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";
import { ProfileContext, ServicesContext } from "../../../../App";
import { styles } from "./styles";
import { deleteService } from "../../../utils/backendCalls";

const MyListings = ({navigation}) => {
    const {services, setServices} = useContext(ServicesContext);
    const {profile} = useContext(ProfileContext);
    const myServices = services?.filter(service => service?.owner === profile?.id);
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item });
        };
        const onRemove = async () => {
            const updatedServices = await deleteService(item?.id);
            setServices(updatedServices);
        };
        return (
            <FavoriteItem onIconPress={onRemove} icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
        );
    };

    const goBack = () => navigation.goBack();
    return (
        <SafeAreaView style={styles.container}>
            <Header title='My Listings' showBack onBackPress={goBack} />

            <FlatList data={myServices} renderItem={renderItem} keyExtractor={item => String(item?.id)} />
        </SafeAreaView>
    );
}

export default MyListings;
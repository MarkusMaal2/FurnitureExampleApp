import React, {useContext} from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";
import { products } from "../../../data/products";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { ServicesContext } from "../../../../App";
import { updateService } from "../../../utils/backendCalls";

const Favorites = ({navigation}) => {
    const {services, setServices} = useContext(ServicesContext);
    const likedServices = Array.isArray(services) ? services?.filter(service => service?.liked) : [];


    const renderItem = ({item}) => {

        const onRemove = async () => {
            const updatedServices = await updateService(item?.id, {liked: false});
            if (Array.isArray(updateServices)) {
                setServices(updateService);
            }
        }
    
        const onIconPress = () => {
            Alert.alert('Are you sure you want to remove this item from your favorites?', '', [{text: 'Yes', onPress: onRemove}, {text: 'No'}])
        }

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
                <FlatList data={likedServices} renderItem={renderItem} keyExtractor={(item) => String(item?.id)} ListEmptyComponent={(<Text style={{textAlign: 'center', marginTop: 40}}>You do not have any favorites yet</Text>) }/>
            </View>
        </SafeAreaView>
    )
}

export default Favorites;
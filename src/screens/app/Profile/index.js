import React, { useContext, useEffect } from "react";
import {View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import { UserContext } from "../../../../App";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileContext } from "../../../../App";
import { getProfile } from "../../../utils/backendCalls";

const Profile = ({navigation}) => {
    const {user, setUser} = useContext(UserContext);
    const {profile, setProfile} = useContext(ProfileContext);

    useEffect(() => {
        (async() => {
            const data = await getProfile();
            setProfile(data);
        })()
    }, [])
    const num = 10;

    const onLogout = async () => {
        await AsyncStorage.removeItem("accessToken");
        setUser(null);
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    }

    const onNewListingPress = () => {
        navigation.navigate("CreateListing")
    }

    const onMyListingsPress = () => {
        navigation.navigate("MyListings");
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                <Header title="Profile" showLogout onLogout={onLogout}></Header>
                <Text style={styles.name}>{profile?.fullName}</Text>
                <Text style={styles.email}>{profile?.email}</Text>
                <ListItem onPress={onMyListingsPress} title="My Listings" subtitle={`Already have ${num} listings`}/>
                <ListItem onPress={onSettingsPress} title="Settings" subtitle="Account, FAQ, Contact"/>
                </View>
                <Button onPress={onNewListingPress} style={styles.buttonFix} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default Profile;
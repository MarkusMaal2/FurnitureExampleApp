import React, { useState, useContext } from "react";
import {View, Text, Linking, Image, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";
import { ProfileContext } from "../../../../App";
import { updateProfile } from "../../../utils/backendCalls";

const Settings = ({navigation}) => {
    const num = 10;
    const [editing, setEditing] = useState(false);
    const {profile, setProfile} = useContext(ProfileContext);
    const [values, setValues] = useState({_id: profile?._id, fullName: profile?.fullName, email: profile?.email});

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }

    const onEditPress = () => {
        setEditing(true);
    }

    const onSavePress = async () => {
        const updatedProfile = await updateProfile(values);
        setProfile(updatedProfile);
        setEditing(false);
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
                <Header title="Settings" showBack={true} onBackPress={goBack}></Header>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal information</Text>
                    <Pressable onPress={onEditPress}><Image style={styles.icon} source={require('../../../assets/edit.png')}></Image></Pressable>
                </View>
                <EditableBox label="Name" value={values.fullName} onChangeText={(v) => { onChange('fullName', v); }} editable={editing} />
                <EditableBox label="E-mail" value={values.email} onChangeText={(v) => { onChange('email', v); }} editable={editing} />
                {editing ? (<Button onPress={onSavePress} style={styles.button} title="Save"/>) : null}
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </View>
        </SafeAreaView>
    )
}

export default Settings;
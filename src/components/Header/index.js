import React, {useState} from "react";
import { Pressable, Image, Text, View } from "react-native";
import Input from "../Input";
import { styles } from "./styles"

const Header = ({title, onBackPress, onSearch, onLogout, showBack, showSearch, showLogout}) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchHandler = () => {
        setShowSearchInput(search => !search);
    }

    return (
        <View>
            <View style={styles.container}>
                {
                    showBack
                    ?
                    (
                        <Pressable hitSlop={20} onPress={onBackPress}>
                            <Image style={styles.icon} source={require('../../assets/back.png')} />
                        </Pressable>
                    )
                    : showSearch ?
                    (
                        <Pressable onPress={onSearchHandler} hitSlop={20}>
                            <Image style={styles.icon} source={require('../../assets/magnifier.png')} />
                        </Pressable>
                    ): <View style={styles.space} />
                }
                <Text style={styles.title}>{title}</Text>
                {
                    showLogout ? (
                        <Pressable hitSlop={20} onPress={onLogout}>
                            <Image style={styles.icon} source={require('../../assets/logout.png')} />
                        </Pressable>
                    ) : <View style={styles.space} />
                }
            </View>
            {
                showSearchInput ? (
                    <Input placeholder="Type your keyword"></Input>
                ) : null
            }
        </View>
    )
}

export default Header;
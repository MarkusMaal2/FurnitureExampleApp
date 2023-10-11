import React, {useState} from "react";
import { TextInput, View, Text, Pressable, Image, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword, value, onChangeText, style, type, options, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const onSelect = (opt) => {
        onChangeText(opt)
        setIsPickerModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable style={styles.inputContainer} onPress={() => setIsPickerModalVisible(true)}>
                    { value ? (<Text style={[styles.placeholder, style]}>{value?.title}</Text>) : (<Text style={[styles.placeholder, style]}>{placeholder}</Text>) }
                    <Image style={styles.arrow} source={require('../../assets/arrow_down.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} value={value} onChangeText={onChangeText} {...props}/>
                    {
                        isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image  style={styles.eye}source={!isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                        </Pressable>
                        ) : null
                    }
                </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setIsPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.optionTitle}>Select options</Text>
                        {
                            options?.map(opt => {
                                if (!opt?.id) {
                                    return null
                                }

                                const selected = value?.id === opt?.id;

                                return (<Text key={opt?.title}  onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption: {}]}>{opt?.title}</Text>)
                            })
                        }
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Input;
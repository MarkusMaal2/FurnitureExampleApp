import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginHorizontal: 35
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
         paddingVertical: 21,
         paddingHorizontal: 17,
         flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500',
    },

    eye: {
        marginHorizontal: 16,
        width: 24,
        height: 24,
    }
})
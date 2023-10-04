import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.20,
        shadowRadius: 12.35,

        elevation: 6,

        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,
    },

    label: {
        color: colors.grey,
        fontSize: 12,
        marginBottom: 6,
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        marginBottom: 6,
    },
})
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 0,
        borderRadius: 10,
        width: "100%",
        flex: 1
    },

    title: {
        textAlign: "center",
        color: colors.white,
        padding: 10,
        paddingVertical: 20,
        fontWeight: "bold",
    }
})
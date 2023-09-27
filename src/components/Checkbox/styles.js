import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22
    },

    innerContainer: {
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: "center"
    }
})
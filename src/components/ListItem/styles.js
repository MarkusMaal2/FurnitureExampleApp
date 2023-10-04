import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.20,
        shadowRadius: 12.35,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,
        elevation: 19,
    },

    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
    },
    arrow: {
        height: 16,
        width: 8,
    }
})
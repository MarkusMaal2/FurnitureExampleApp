import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create( {
    container: {
        padding: 24
    },

    agreeRow: {
        flexDirection: 'row',
        alignItems: "center",
    },

    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },

    boldText: {
        fontWeight: "bold",
    },

    button: {
        marginVertical: 20,
        marginLeft: 0
    },

    footerText: {
        color: colors.blue,
        marginBottom: 50,
        textAlign: "center"
    },

    footerLink: {
        fontWeight: "bold"
    },
})
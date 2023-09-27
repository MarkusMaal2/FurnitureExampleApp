import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },

    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },

    titleContainer: {
        marginVertical: 54
    },

    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline'
    },

    container: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    footerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#4F63AC",
        paddingTop: 10,
    }
})
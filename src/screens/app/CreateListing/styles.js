import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginVertical: 16,
    },
    image: {
        width: 100,
        height: 100,
        minHeight: 100,
        minHeight: 100,
        backgroundColor: "red",
        borderRadius: 8,
        marginRight: 8,
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    delete: {
        width: 24,
        height: 24,
        marginTop: -10,
        marginLeft: -23,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        botderColor: colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -4
    },
    loader: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginTop: "50%",
    },
    textarea: {
        minHeight: 140,
        paddingTop: 21,
    }
})
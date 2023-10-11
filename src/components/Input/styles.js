import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
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
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey,
    },
    modalWrapper: {
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: '80%'
    },
    optionTitle: {
        color: colors.black,
        marginBottom: 16,
        fontSize: 16,
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold',
    }
})
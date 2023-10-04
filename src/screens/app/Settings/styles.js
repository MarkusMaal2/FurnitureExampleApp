import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create( {
    container: {
        padding: 24,
        flex: 1
    },
    item: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    button: {
        maxHeight: 60,
        paddingTop: 2,
        marginVertical: 16,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 24,
        height: 24,
    }
});
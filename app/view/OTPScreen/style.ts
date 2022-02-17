import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
        justifyContent: "space-between"

    },
    logo: {
        justifyContent: "center",
        alignItems: "center"
    },
    Heading: {
        textAlign: "center",
        fontSize: 25,
        color: COLORS.black,
        fontWeight: "bold",
        marginTop: 20,

    },
    subheadcon:{
        marginVertical:15,
    },
    subhead: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        color: COLORS.darkGray2,

    },
    TextinputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,


    },
    inputbox: {
        backgroundColor: COLORS.lightGray2,
        padding:18,
        borderRadius:15
    },
    DidntContainer: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "center"
    },
    DidTxt: {
        fontSize: 20,
        color: COLORS.darkGray2,
    },
    Resend: {
        fontSize: 18,
        color: "orange",
        margin: 2,

    },
    Button: {
        fontSize: 20,
        backgroundColor: COLORS.primary,
        padding: 2,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
    },
    continue: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    SignMsg: {
        textAlign: "center",
        fontSize: 15,
        color: COLORS.black,
        marginVertical: 5
    },
    Terms: {
        textAlign: "center",
        color: COLORS.primary,
    },
})


export default styles;


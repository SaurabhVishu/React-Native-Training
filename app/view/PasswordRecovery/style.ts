import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";

const styles= StyleSheet.create({
    container:{
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
    inputContainer: {
        marginVertical: 10,
    },
    emailtxt: {
        marginVertical:5,
        margin: 5,
    },
    Icon: {
        height: 25,
        width: 25,
    },
    textinputcont: {
        backgroundColor:COLORS.lightGray2,
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop:5,
    },
    emailTextInput: {
        height: 40,
        width: "90%",
        marginTop: 10,
        borderRadius: 10,
    },
    SignInCon:{
        marginVertical:15,
    },
    Button: {
        fontSize: 20,
        backgroundColor: COLORS.primary,
        padding: 2,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
    },
    signinTxt:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

})
export default styles
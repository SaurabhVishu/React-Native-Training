import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
           justifyContent: "space-between",

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
        // marginTop: 20,
    },
    subhead: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        color: COLORS.darkGray
    },
    emailtxt: {
        margin: 5,
    },
    textinputcont: {
        backgroundColor:COLORS.lightGray2,
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    emailTextInput: {
        height: 40,
        width: "90%",
        marginTop: 10,
        borderRadius: 10,
    },
    inputContainer:{
        marginVertical:5,

    },
    Paswd:{
        margin: 5,

    },
    eyeIcon:{
        height: 25,
        width: 25,
    },
    Button:{
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
    Signuptext:{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical:5,
    },
    donthaveAc:{
        textAlign: "center",
        fontSize: 20,
        color: "black"
    },
    SignUpBtn:{
        textAlign: "center",
        fontSize: 18,
        color:COLORS.orange,
        marginLeft:5
    },
    FbButton:{
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,
    },
    fbIcon:{
        height: 25,
        width: 25,
        marginLeft: 5
    },
    fbBtnTxt:{
        textAlign: "center",
        color: "white",
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold"
    },

    GglBtn:{
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.gray3,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5
    },
    GglIcon:{
        height: 25,
        width: 25,
        marginLeft: 5
    },
    GglBtnTxt:{
        textAlign: "center",
        color: "black",
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold"
    },
    SignInCon:{
        marginVertical:15,
    },


})
export default styles;

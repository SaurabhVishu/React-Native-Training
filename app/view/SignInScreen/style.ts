import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";
import { SIZES } from "../../config/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: "space-between",
        //    justifyContent:"center",
        //    alignItems:"center",
        backgroundColor: "white"
    },
    inputContainer: {
        marginVertical: 10,
    },
    emailtxt: {
        margin: 5,
    },
    Paswd: {
        margin: 5,
    },
    eyeIcon: {
        height: 25,
        width: 25,
    },
    TogleBtnCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    switchBtn: {
        flexDirection: "row",
    },
    fgtBtn: {
        alignItems: "center"
    },

    logo: {
        //   flex:1,
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
    subhead: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        color: COLORS.darkGray
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
    Button: {
        // flexDirection: "row",
        fontSize: 20,
        backgroundColor: COLORS.primary,
        padding: 2,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
    },
    signinTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    Signuptext: {
        flexDirection: "row",
        justifyContent: "center",
        // alignItems:"center",
    },
    donthaveAc: {
        textAlign: "center",
        fontSize: 20,
        color: "black"
    },
    txt1: {
        fontSize: 10,
        color: "black"
    },
    SignUpBtn: {
        textAlign: "center",
        fontSize: 18,
        color: "orange"
    },


    FbButton: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,

    },

    GglBtn: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.gray3,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5
    },
    fbIcon: {
        height: 25,
        width: 25,
        marginLeft: 5
    },
    fbBtnTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold"
    },
    GglIcon: {
        height: 25,
        width: 25,
        marginLeft: 5
    },
    GglBtnTxt: {
        textAlign: "center",
        color: "black",
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold"
    },

})
export default styles;
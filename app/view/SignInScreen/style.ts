import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";
import { SIZES } from "../../config/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        //    justifyContent:"center",
        //    alignItems:"center",
        backgroundColor: "white"
    },
    inputContainer: {
        // marginVertical: 10,
    },
    inputMaincontainer:{
        marginVertical:10
    },
    emailtxt: {
        margin: 5,
    },
    labelcontainer:{
 flexDirection:"row",
 justifyContent:"space-between",
    },
    Paswd: {
        margin: 5,
    },
    eyeIcon: {
        height: 25,
        width: 25,
        tintColor:COLORS.gray

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
        fontSize: 22,
        color: COLORS.black,
        fontWeight: "bold",
        marginTop: 20,

    },
    subhead: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 17,
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
        width: "85%",
        alignSelf:"flex-start"
    },
    Button: {
        // flexDirection: "row",
        fontSize: 20,
        backgroundColor: COLORS.primary,
        padding: 2,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
    },
    signinTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    suggestionText:{
        margin:5,
        color:"red"
      },
    Signuptext: {
        flexDirection: "row",
        justifyContent: "center",
        // alignItems:"center",
    },
    donthaveAc: {
        textAlign: "center",
        fontSize: 16,
        color: "black",
        marginTop:5
    },
    txt1: {
        fontSize: 10,
        color: "black"
    },
    SignUpBtn: {
        textAlign: "center",
        fontSize: 16,
        color: "orange",
        marginTop:5,
        marginLeft:5
    },


    FbButton: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,

    },

    GglBtn: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 30,
        backgroundColor: COLORS.gray3,
        padding: 10,
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
        fontWeight: "600"
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
        fontWeight: "600"
    },

})
export default styles;
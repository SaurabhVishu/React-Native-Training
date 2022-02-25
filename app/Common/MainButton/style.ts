import { StyleSheet } from "react-native";
import { COLORS } from "../../config/constants";

const styles=StyleSheet.create({
    Button: {
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


})

export default styles;
import { StyleSheet } from "react-native";
import { SIZES } from "../../config/constants";

const styles = StyleSheet.create({
    container: {
        //  alignContent:'center',
        //  justifyContent:'center',
        flex: 1,
        //padding:15,
        backgroundColor:"white"
    },

    RenContainer:{
         flex:1,
    },

    backgroundimage: {
        // flex: 1,
        alignItems: "center",
        height: SIZES.height * 0.7,
        width: SIZES.width * 1


    },
    bannerImage: {
      



    },

    title: {
       // textAlign: "center",
       marginLeft:30,
        fontSize: SIZES.h1,
        color:"black",

    },
    description: {

    }

})

export default styles
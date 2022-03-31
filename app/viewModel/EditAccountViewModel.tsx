import React,{useState} from "react"
import EditAccount from '../view/editAccount/index';
import{View,Text,SafeAreaView } from "react-native"
import { dummyData } from "../config/constants";


interface Inputprop{
    navigation:any
}

const EditAccountViewModel=(props:Inputprop)=>{
    const {navigation}=props
    const[showCal,setShowCal]=useState(false)

    const setUpdatedData= (data:string, index: number) => {
        // switch(index){
        //     case 0:

        // }
    }


    return(
         <EditAccount
         {...{
             navigation,
             data:dummyData.MyAccount,
             showCal,
             setShowCal
         }

         }
         />
    )
}

export default EditAccountViewModel
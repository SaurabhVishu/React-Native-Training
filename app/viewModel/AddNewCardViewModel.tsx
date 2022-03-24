import React from "react";
import { dummyData } from "../config/constants";
import AddNewCard from "../view/addNewCard";

interface InputProp{
    navigation:any
}

const AddNewCardModel=(props:InputProp)=>{
    const{navigation}=props
    return(
        <AddNewCard
        {...{
            navigation,
            data:dummyData.ScreenData.AddNewCard
        }}
        />
    )

}
export default AddNewCardModel

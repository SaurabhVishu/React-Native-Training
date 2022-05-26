import React, { useState } from "react";
import { ImagePropTypes, View } from "react-native"
import { dummyData } from "../config/constants";
import FoodDetail from "../view/FoodDetail";


interface InputProp {
  navigation: any,
  route:any
}

const FoodDetailModel = (props: InputProp) => {
  const [selected, setSelected] = useState(0)
  const { navigation,route } = props;
  const {item}=route.params
  const[value,setValue]=useState(1);
  return (
    <FoodDetail
      {...{
        navigation,
        data: dummyData.ScreenData.FoodDetail,
        selected,
        setSelected,
        item,
        value,
        setValue
      }}
    />
     
  )


}

export default FoodDetailModel;
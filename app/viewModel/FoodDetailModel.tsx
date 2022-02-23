import React, { useState } from "react";
import { View } from "react-native"
import { dummyData } from "../config/constants";
import FoodDetail from "../view/FoodDetail";


interface InputProp {
  navigation: any,
}

const FoodDetailModel = (props: InputProp) => {
  const [selected, setSelected] = useState(0)
  const { navigation } = props;
  return (
    <FoodDetail
      {...{
        navigation,
        data: dummyData.ScreenData.FoodDetail,
        selected,
        setSelected
      }}
    />
     
  )


}

export default FoodDetailModel;
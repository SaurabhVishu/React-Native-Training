import React,{useState} from "react";
import { dummyData } from "../config/constants";
import MyOrder from "../view/MyOrder";

interface InputProp{
    navigation :any

}

const MyOrderModel=(props:InputProp)=>{
    const{navigation}=props
    const[selected,setSelected]=useState(false)
    const [touch, setTouch] = useState(false);

    return(
           <MyOrder
           {...{
               navigation,
               selected,
               setSelected,
               HistoryData:dummyData.HistoryDATA,
               UpcomingData:dummyData.UpcomingDATA,
               touch,
               setTouch
           }}
           />
    )
}

export default MyOrderModel
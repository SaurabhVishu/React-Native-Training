import React,{useState} from "react";
import { dummyData } from "../config/constants";
import MyOrder from "../view/MyOrder";
import { useSelector,useDispatch } from 'react-redux';
 import ChangeValue from '../Redux/Reducer/changeValue';


interface InputProp{
    navigation :any
    ChangeValue:any
}

const MyOrderModel=(props:InputProp)=>{
    const{navigation,ChangeValue}=props
    const[selected,setSelected]=useState(false)
    const [touch, setTouch] = useState(false);
    const counter=useSelector((state:any)=>state.ChangeValue)
    const dispatch=useDispatch();
    // console.log(counter);

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
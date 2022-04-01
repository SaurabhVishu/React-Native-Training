import React,{useEffect, useState} from "react"
import { dummyData } from "../config/constants"
import DeliveryStatus from "../view/DeliveryStatus"


interface Inputprop{
    navigation:any
}

const DeliveryStatusModel=(props:Inputprop)=>{
    const {navigation}=props
    const[id,setId]=useState(0)
    const[touch,setTouch]=useState(false)

    useEffect(() => {
        setTimeout(() => {
          setId((id) => id+1);
        }, 500);
      });
    
    return(
      <DeliveryStatus
      {...{
          navigation,
          id,
          setId,
          ScreenText:dummyData.ScreenData.DeliveryStatus,
          Data:dummyData.DeliveryStatusData,
          touch,
          setTouch
      }

      }
      />  
    )
}

export default DeliveryStatusModel
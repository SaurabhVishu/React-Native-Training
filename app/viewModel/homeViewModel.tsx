import React,{useState} from "react"
import { dummyData } from "../config/constants"
import Home from "../view/Home"

interface InputProp{
    navigation:any
}

const HomeModel=(props:InputProp)=>{
    const[selected,setSelected]=useState(1)
    const[Favourite,setFavourite]=useState(false)
    console.log(selected);
    const{navigation}=props
    let data2=dummyData.Foodmenu.filter((a)=>selected==a.categories)
    //console.log(data2)

     
    return(
<Home
{
    ...{
        navigation,
        data:dummyData.ScreenData.HomeScreen,
        selected,
        setSelected,
        data2,
        Favourite,
        setFavourite
        
    }
}

/>
)
}
export default HomeModel
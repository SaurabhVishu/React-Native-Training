import React, { useEffect, useState } from "react";
import {ActivityIndicator, View} from "react-native"
import { FetchHomeData } from "../controllers";
import HomeScreen from "../view/homescreen/homescreen";


interface InputProp {
    navigation: any
}

const HomeModel = (props: InputProp) => {
    const { navigation } = props
    const [IsLoading,setIsLoading]=useState(true)
    const [data, setData] = useState([])
    const getHomeData =async () => {
         let res = await FetchHomeData()
         setData(res)
         setIsLoading(false)
         
         console.log(res)
    }
    useEffect(()=>{
        getHomeData()
        return ()=> console.log("Will unmount")
    },[])
   //
    return (
   <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       {IsLoading ? <ActivityIndicator size={40}/> : <HomeScreen navigation={navigation} data={data}
        IsLoading={IsLoading}
        />}


   </View> 
    
        
     
         )
}

export default HomeModel



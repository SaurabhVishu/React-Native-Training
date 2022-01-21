import React, { useEffect, useState } from "react";
import { FetchHomeData } from "../controllers";
import HomeScreen from "../view/homescreen/homescreen";


interface InputProp {
    navigation: any
}

const HomeModel = (props: InputProp) => {
    const { navigation } = props
    const [data, setData] = useState([])
    const getHomeData =async () => {
         let res = await FetchHomeData()
         setData(res)
         console.log(res)
    }
    useEffect(()=>{
        getHomeData()
    },[])
    return (<HomeScreen navigation={navigation} data={data} />)
}

export default HomeModel


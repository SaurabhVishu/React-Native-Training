import React,{useState} from "react"
import MapViewScreen from "../view/mapView"
import MapView from "../view/mapView"


interface Inputprop{
    navigation:any
}

const MapViewModel=(props:Inputprop)=>{
    const {navigation}=props
    const [modalVisible, setModalVisible] = useState(true);
    return(
         <MapViewScreen
         {...{
             navigation,
             modalVisible, 
             setModalVisible
         }}/>
    )
}

export default MapViewModel
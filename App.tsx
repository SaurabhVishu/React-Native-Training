import React from "react";
import { LogBox } from "react-native";
import MainApp from "./app/Routes";
import {Provider} from 'react-redux';
import store from './app/Redux/store';
import {useSelector} from "react-redux"


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App =()=>{
    // store.subscribe(()=>console.log(store.getState()))
  
   return(
    <Provider store={store}>
    <MainApp/>
    </Provider>
  )
}

export default App;
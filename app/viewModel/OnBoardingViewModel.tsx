import {View} from "react-native"
import OnBoardingScreen from "../view/OnBoardingScreen";


interface InputProp{
    navigation: any,
}

const OnBoardingModel =(props:InputProp)=>{
    const {navigation}=props;
    return(
        <OnBoardingScreen  navigation={navigation}/>
        
    )
    

}

export default OnBoardingModel;
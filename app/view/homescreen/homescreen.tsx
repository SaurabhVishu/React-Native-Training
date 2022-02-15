import React, { useState } from "react";
import { Text, TouchableOpacity, View ,ActivityIndicator,Modal,Alert} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./style";

interface InputProp {
    navigation: any,
    data: Array<any>,
    IsLoading:boolean,
}

const HomeScreen = (props: InputProp)=> {
    const [modalVisible,setModalVisible] = useState(false);
    const {navigation, data,IsLoading} = props //break the data
    return(
        <View style={styles.container}>
               
             
             
            {/* <Text>HomeScreen</Text>
            <TouchableOpacity onPress={()=> {navigation.navigate("Profile")}}>
                <Text>Go to ProfileScreen</Text>
        
            </TouchableOpacity> */}
            
            <FlatList data={data}
            extraData={data}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item, index}) => {
                console.log(item.Country)
                return(
                    <View >
                       
                        <Text style={{fontSize:25,fontWeight:"500",color:'white',paddingVertical:10}}>{item.Country}</Text>
                    </View>
                )
            }}/>

        </View>
    )
}

export default HomeScreen
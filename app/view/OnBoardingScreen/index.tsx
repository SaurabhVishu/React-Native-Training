import React,{useState,useRef} from "react";
import { Text, View, Button, Image, FlatList, ImageBackground ,TouchableOpacity, SafeAreaView} from "react-native";
import styles from "./style";
import { constants, SIZES } from "../../config/constants";
import { HeaderLogo, MainButton } from "../../Common";



interface RenderItemProp {
    item: {
      id: number;
      backgroundImage: any;
      bannerImage: any;
      title: string;
      description: string;
  };
    index: Number;
    navigation:any
    FlatlistRef: React.MutableRefObject<any>
}

const RenderItem = (props: RenderItemProp) => {
    const { item, index ,navigation,FlatlistRef} = props;
    const[touch,setTouch]=useState(false)
    console.log("index is",index);
   
    const scrollToIndex = (id:number) => {
      FlatlistRef.current.scrollToIndex({animated: true, index:id});
    }
    
    return (
        <SafeAreaView style={styles.RenContainer}>
             <Image style={styles.backgroundimage} source={item.backgroundImage} />
             
            <View style={{ flex: 1, 
                 alignItems: "center" }}>
                    <View style={{marginVertical:20}}><HeaderLogo/></View>
                    <Image style={styles.bannerImage} source={item.bannerImage} />
                </View>
          <View style={{bottom:30}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text> 
            </View>


            <View style={{marginTop:20}} >
                {item.id <= 2? (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={
                styles.unSelectBtn
              }
              onPress={()=>scrollToIndex(2)}
              >
              <Text
                style={
                  styles.unselectBtnName
                }>
                {constants.Button.skip}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={()=>scrollToIndex(item.id)}
              >
              <Text
                style={
                 styles.btnName
                }>
                {constants.Button.next}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{marginVertical:10,marginHorizontal:5}}>
          <MainButton name={constants.Button.letsGetStarted} 
        Press={()=>navigation.navigate("SignIn")}
          />
          </View>
        )}


            </View>
        </SafeAreaView>

    )

}






const OnBoardingScreen = (props: any) => {
    const { navigation } = props;
    const FlatlistRef=useRef<any|null>();

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={constants.onboarding_screens}
                extraData={constants.onboarding_screens}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} navigation={navigation}
                FlatlistRef={FlatlistRef}
                />}
                snapToInterval={SIZES.width}
                decelerationRate={0}
                scrollEventThrottle={16}
                bounces={false}
                initialScrollIndex={1}
                ref={FlatlistRef}
            />


        </View>

    );
}
export default OnBoardingScreen;

function id(id: any): ((event: import("react-native").GestureResponderEvent) => void) | undefined {
  throw new Error("Function not implemented.");
}

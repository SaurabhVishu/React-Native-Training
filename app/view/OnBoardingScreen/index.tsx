import React from "react";
import { Text, View, Button, Image, FlatList, ImageBackground } from "react-native";
import styles from "./style";
import { constants, SIZES } from "../../config/constants";
import { HeaderLogo } from "../../Common";



interface RenderItemProp {
    item: any;
    index: Number;
}

const RenderItem = (props: RenderItemProp) => {
    const { item, index } = props;
    return (
        <View style={styles.RenContainer}>
            <ImageBackground
                style={styles.backgroundimage} source={item.backgroundImage} >
                <View style={{ flex: 1, justifyContent: "flex-end",
                 alignItems: "center" }}>
                    <View><HeaderLogo/></View>
                    <Image style={styles.bannerImage} source={item.bannerImage} />
                </View>





            </ImageBackground>
            <View style={{justifyContent:"flex-start"}} >
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text style={styles.description}>{item.description}</Text> */}


            </View>
        </View>

    )

}






const OnBoardingScreen = (props: any) => {
    const { navigation, } = props;
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={constants.onboarding_screens}
                extraData={constants.onboarding_screens}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
                snapToInterval={SIZES.width}
                decelerationRate={0}
                scrollEventThrottle={16}
                bounces={false}
                initialScrollIndex={1}
            />


        </View>

    );
}
export default OnBoardingScreen;
import React from "react";
import { View, Text, Dimensions, Image, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { constants, dummyData, icons, images } from "../../config/constants";
import styles from './style';
import { SIZES, COLORS } from '../../config/constants/theme';

interface InputProp {
    navigation: any
    data: any
    setSelected: any
    selected: any
}

const FoodDetail = (props: InputProp) => {


    const { navigation, data, selected, setSelected } = props;
    const RenderSizes = () => {
        return <FlatList
            data={dummyData.SizeData}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        onPress={() => setSelected(index)}

                        style={selected == index ? styles.renderItem : styles.toggle}>

                        <Text style={[styles.renderText, { color:selected == index ?  COLORS.white: COLORS.lightGray1}]}>{item.name}"</Text>
                    </TouchableOpacity>
                )
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={styles.itemSep}></View>
                )
            }}
        />
    }


    return (
        <View style={styles.container} >
            {/* Header section */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerIconCont} >
                    <Image source={icons.back} style={styles.headerIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{constants.screens.deatil}</Text>
                <TouchableOpacity style={styles.headerIconCont}>
                    <Image source={icons.cart} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.styleHeader}>
                <View style={styles.Topcard} >
                    <View style={styles.upeerLeft}>
                        <Image source={icons.calories} style={styles.calories} />
                        <Text style={styles.text}>{data.t1}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={icons.favourite} style={styles.favourite} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bugerContainer}>
                    <Image source={require("../../assets/dummyData/hamburger.png")}
                        style={styles.hamburger}
                    />
                </View>
            </View>

            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.DeatailCont}>
                <View style={styles.starCont}>
                    <Image source={icons.star} style={styles.star} />
                    <Text style={styles.startxt} >{data.t2}</Text>
                </View>
                <Image source={icons.clock} style={styles.clock} />
                <Text style={styles.t3}>{data.t3}</Text>
                <Image source={icons.dollar} style={styles.dollor} />
                <Text style={styles.t3}>{data.t4}</Text>
            </View>

            <View style={styles.sizesContainer}>
                <View>
                    <Text style={styles.t3}>{data.Sizes}</Text>
                </View>
                <View style={{}}>
                    <RenderSizes />
                </View>
            </View>
            <View style={styles.ratingCont}>
                <Image source={images.profile}
                    style={styles.profile} />
                <View style={styles.ratingTextCon}>
                    <Text style={styles.t3}>{data.ByProg}</Text>
                    <Text style={styles.description}>{data.dis}</Text>
                </View>
                <View style={styles.profileCon}>
                    {
                        dummyData.StarData.map((item, index) => {
                            return (
                                <Image source={item.icon} key={index} style={styles.starSize} />
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.btmBtnCont}>
                <View style={styles.addbtn}>
                    <TouchableOpacity>
                        <Image source={icons.minus} style={styles.star} />
                    </TouchableOpacity>
                    <Text style={styles.one}>1</Text>
                    <TouchableOpacity>
                        <Image source={icons.plus} style={styles.star} />
                    </TouchableOpacity>
                </View>
                <View style={styles.pricebtn}>

                    <Text style={styles.startxt}>{constants.Button.buynow}</Text>
                    <Text style={styles.startxt}>{data.price}</Text>

                </View>

            </View>









        </View >

    )
}

export default FoodDetail;

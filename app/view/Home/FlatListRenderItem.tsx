import React, { useState } from "react";
import { FlatList, TouchableOpacity, Image, Text, View } from "react-native";
import { dummyData, icons } from "../../config/constants";
import styles from "./style";

interface reanderfirst{
    setSelected:any
    selected:any
}
export const RenderFirst = (props:reanderfirst) => {
    const {setSelected,selected}=props
    return (
      <FlatList
        data={dummyData.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(item.id)}
              style={
                selected == item.id
                  ? styles.TrueFirstRenderItemContainer
                  : styles.FirstRenderItemContainer
              }>
              <Image source={item.icon} style={styles.RenderIcon} />
              <Text
                style={
                  selected == item.id
                    ? styles.TrueRenderTitle
                    : styles.RenderTitle
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSep}></View>;
        }}
      />
    );
  };


interface secondrenderprops{
    data2:any
    data:any
    //setFavourite:any
    // selected:boolean
    //Favourite:any
    item:any
    index:number
    navigation:any
    likebuttonClickHandler: (index: number) => void;
}

export  const RenderSecond = (props:secondrenderprops) => {
    const {data2,  data,
         //setFavourite,
       // selected,
       // Favourite,
        item,
        index,
        navigation,
        likebuttonClickHandler
    }=props
    
    return (
            <TouchableOpacity onPress={()=>navigation.navigate("FoodDetail",{
              item

            })}>
            <View style={styles.RendersecondContainer}>
              <View style={styles.uperRenderView}>
                <View style={styles.caloriesView}>
                  <Image style={styles.caloriesIcon} source={icons.calories} />
                  <Text style={styles.caloriesText}>{data.calories}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => likebuttonClickHandler(index)}>
                    <Image
                      source={icons.love}
                      style={
                        item.isFavourite
                          ? styles.TrueLove
                          : styles.Favourite
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.RenImageContainer}>
                <Image source={item.image} style={styles.RenderSecondImage} />
                <Text style={styles.description}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
            </TouchableOpacity>
        
        
    );
  };

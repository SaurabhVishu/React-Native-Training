import React from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {constants, dummyData, icons, images} from '../../config/constants';
import styles from './style';
import {SIZES, COLORS} from '../../config/constants/theme';

interface InputProp {
  navigation: any;
  data: any;
  setSelected: any;
  selected: any;
  item: any;
  value: number;
  setValue: any;
}

const FoodDetail = (props: InputProp) => {
  const {navigation, data, selected, setSelected, item, value, setValue} =
    props;
  const RenderSizes = () => {
    return (
      <FlatList
        data={dummyData.SizeData}
        horizontal
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              style={selected == index ? styles.renderItem : styles.toggle}>
              <Text
                style={[
                  styles.renderText,
                  {color: selected == index ? COLORS.white : COLORS.lightGray1},
                ]}>
                {item.name}"
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

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerIconCont}
          onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{constants.screens.deatil}</Text>
        <TouchableOpacity style={styles.cartIconContainer}>
          <Image source={icons.cart} style={styles.cartIcon} />

          <View
            style={styles.countContainer}>
            <Text style={styles.count}>{value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.styleHeader}>
          <View style={styles.Topcard}>
            <View style={styles.upeerLeft}>
              <Image source={icons.calories} style={styles.calories} />
              <Text style={styles.text}>{data.t1}</Text>
            </View>
            <TouchableOpacity>
              <Image source={icons.love} style={styles.favourite} />
            </TouchableOpacity>
          </View>
          <View style={styles.bugerContainer}>
            <Image source={item.image} style={styles.hamburger} />
          </View>
        </View>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.DeatailCont}>
          <View style={styles.starCont}>
            <Image source={icons.star} style={styles.star} />
            <Text style={styles.startxt}>{data.t2}</Text>
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
          <Image source={images.profile} style={styles.profile} />
          <View style={styles.ratingTextCon}>
            <Text style={styles.t3}>{data.ByProg}</Text>
            <Text style={styles.description}>{data.dis}</Text>
          </View>
          <View style={styles.profileCon}>
            {dummyData.StarData.map((item, index) => {
              return (
                <Image source={item.icon} key={index} style={styles.starSize} />
              );
            })}
          </View>
        </View>

        <View style={styles.btmBtnCont}>
          <View style={styles.addbtn}>
            <TouchableOpacity
              onPress={() => setValue(value > 0 ? value - 1 : 0)}>
              <Image source={icons.minus} style={styles.star} />
            </TouchableOpacity>
            <Text style={styles.one}>{value}</Text>
            <TouchableOpacity onPress={() => setValue(value + 1)}>
              <Image source={icons.plus} style={styles.star} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.pricebtn}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.startxt}>{constants.Button.buynow}</Text>
            <Text style={styles.startxt}>$ {value * 10.99}</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;

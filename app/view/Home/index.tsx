import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '../../Common/Header/header';
import {constants, dummyData, icons} from '../../config/constants';
import { HomeScreendata } from '../../Models';
import styles from './style';

interface InputProp {
  navigation: any;
  data:HomeScreendata ;
  selected: number;
  setSelected: any;
  data2: {
    id: number;
    name: string;
    description: string;
    price: number;
    calories: number;
    isFavourite: boolean;
    image: any;
    categories: number;
    distance: number;
    rating: number;
    time: string;
  }[];

  Favourite: number;
  setFavourite: any;
}

const Home = (props: InputProp) => {
  const {
    navigation,
    data,
    selected,
    setSelected,
    data2,
    Favourite,
    setFavourite,
  } = props;

  const RenderFirst = () => {
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
  const RenderSecond = () => {
    return (
      <FlatList
        data={data2}
        horizontal
        renderItem={({item, index}) => {
          return (
            <View style={styles.RendersecondContainer}>
              <View style={styles.uperRenderView}>
                <View style={styles.caloriesView}>
                  <Image style={styles.caloriesIcon} source={icons.calories} />
                  <Text style={styles.caloriesText}>{data.calories}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => setFavourite(true)}>
                    <Image
                      source={icons.love}
                      style={
                        selected == Favourite
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
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSep}></View>;
        }}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          name={constants.screens.MY_CARD}
          leftIcon={icons.menu}
          rytIcon={icons.profile}
        />

        <View style={styles.TextInputContainer}>
          <View style={styles.TextinputIconContainer}>
            <View style={styles.searchContainer}>
              <TouchableOpacity>
                <Image source={icons.search} style={styles.searchIcon} />
              </TouchableOpacity>
              <TextInput placeholder="Search Food.." />
            </View>
            <TouchableOpacity>
              <Image source={icons.filter} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.Deliveryto}>{data.DELIVERYTO}</Text>
        <View style={styles.DownArrowContainer}>
          <Text style={styles.description}>{data.NO88JlnPodungan}</Text>
          <Image source={icons.down_arrow} style={styles.DownArrow} />
        </View>
        <View style={styles.RenderFirstContainer}>
          <RenderFirst />
        </View>
        <View style={styles.PopularTextContainer}>
          <Text style={styles.description}>{data.PopularNearYOU}</Text>
          <Text style={styles.Deliveryto}>{data.ShowAll}</Text>
        </View>
        <View>
          <RenderSecond />
        </View>
        <View style={styles.RecommendedContainer}>
          <Text style={styles.description}>{data.Recommended}</Text>
          <Text style={styles.Deliveryto}>{data.ShowAll}</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.mapContainer}>
            {dummyData.Foodmenu.map((item, index) => {
              return (
                <View
                  style={[styles.RendersecondContainer, styles.map]}
                  key={index}>
                  <View style={styles.uperRenderView}>
                    <View style={styles.caloriesView}>
                      <Image
                        style={styles.caloriesIcon}
                        source={item.calories}
                      />
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => setFavourite(true)}>
                        <Image
                          source={icons.love}
                          style={
                            selected == Favourite
                              ? styles.TrueLove
                              : styles.Favourite
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.RenImageContainer}>
                    <Image
                      source={item.image}
                      style={styles.RenderSecondImage}
                    />
                    <Text style={styles.description}>{item.name}</Text>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

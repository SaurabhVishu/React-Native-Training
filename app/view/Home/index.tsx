import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import Header from '../../Common/Header';
import Slider from '../../Common/Multislider';
import {constants, dummyData, icons} from '../../config/constants';
import {HomeScreendata} from '../../Models';
import {RenderFirst, RenderSecond} from './FlatListRenderItem';
import styles from './style';
import {FONTS} from '../../config/constants/theme';

interface InputProp {
  navigation: any;
  data: any;
  selected: any;
  setSelected: any;
  data2: any;

  Favourite: any;
  setFavourite: any;
  modalVisible: any;
  setModalVisible: any;
  setdistance: any;
  setprice: any;
  maxtime: any;
  setMaxtime: any;
  defaulttime: any;
  setDefaulttime: any;
  rating: any;
  setDefaultRating: any;
  defaultRating: any;
  searchText: any;
  setSearchText: any;
  filterdata: any;
  setfilterdata: any;
  isSearch: boolean;
  setisSearch: any;
  menudata: {
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
  SearchData: any;
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
    modalVisible,
    setModalVisible,
    setdistance,
    setprice,
    maxtime,
    setMaxtime,
    defaulttime,
    setDefaulttime,
    rating,
    setDefaultRating,
    defaultRating,
    searchText,
    setSearchText,
    filterdata,
    setfilterdata,
    menudata,
    isSearch,
    setisSearch,
    SearchData,
  } = props;
  // const [Favourite, setFavourite] = useState(false);

  const CustomRatingBar = () => {
    return (
      <View style={styles.ratingContainer}>
        {rating.map((item: any, key: any) => {
          return (
            <TouchableOpacity
              key={key}
              style={styles.rateButton}
              onPress={() => setDefaultRating(item)}>
              <Text style={styles.rateText}>{item}</Text>
              <Image
                source={icons.star}
                style={
                  item <= defaultRating
                    ? styles.activeStarIcon
                    : styles.starIcon
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const CustomTimeBar = () => {
    return (
      <View style={styles.customtipsBarStyle}>
        {maxtime.map((item: any, key: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaulttime(item)}
              style={
                item == defaulttime ? styles.activeStyle : styles.inactiveStyle
              }>
              <Text
                style={
                  item == defaulttime
                    ? styles.activeTextStyle
                    : styles.inactiveTextStyle
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const filterdataDisplay = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
          }}>
          Filterd item
        </Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.mapContainer}>
            {menudata.map((item, index) => {
              return (
                <View
                  style={[styles.RendersecondContainer, styles.map]}
                  key={index}>
                  <View style={styles.uperRenderView}>
                    <View style={styles.caloriesView}>
                      <Image
                        style={styles.caloriesIcon}
                        source={icons.calories}
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
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          name={constants.screens.home}
          leftIcon={icons.menu}
          rytIcon={icons.profile}
          leftNavigation={() => navigation.openDrawer()}
        />

        <View style={styles.TextInputContainer}>
          <View style={styles.TextinputIconContainer}>
            <View style={styles.searchContainer}>
              <TouchableOpacity
                onPress={() => {
                  setisSearch(false);
                }}>
                <Image source={icons.search} style={styles.searchIcon} />
              </TouchableOpacity>
              <TextInput
                placeholder="Search Food.."
                onChangeText={text => setSearchText(text)}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image source={icons.filter} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {searchText != '' && (
          <View style={styles.searchcontainer}>
            <View style={styles.mainsmallcontainer}>
              <View style={styles.smallcontainer}>
                <Text style={FONTS.h3}>Search item is : {searchText}</Text>
              </View>
              {SearchData.length != 0 ? (
                // <RenderSecond
                //   data2={SearchData}
                //   data={data}
                //   setFavourite={setFavourite}
                //   selected={selected}
                //   Favourite={Favourite}
                // />
                <FlatList
                data={SearchData}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <RenderSecond
                     {...{ data2,
                      data,
                      setFavourite,
                      selected,
                      Favourite,
                      item,
                      index,
                      navigation
                    }}
                    />
                  );
                }}
                ItemSeparatorComponent={() => {
                  return <View style={styles.itemSep}></View>;
                }}
                showsHorizontalScrollIndicator={false}
              />
              ) : (
                <Text style={FONTS.h3}> Searched Item Is Not Found </Text>
              )}
            </View>
          </View>
        )}

        {!filterdata ? (
          <>
            <>
              <Text style={styles.Deliveryto}>{data.DELIVERYTO}</Text>
              <View style={styles.DownArrowContainer}>
                <Text style={styles.description}>{data.NO88JlnPodungan}</Text>
                <Image source={icons.down_arrow} style={styles.DownArrow} />
              </View>
              <View style={styles.RenderFirstContainer}>
                <RenderFirst setSelected={setSelected} selected={selected} />
              </View>
            </>
            <View style={styles.PopularTextContainer}>
              <Text style={styles.description}>{data.PopularNearYOU}</Text>
              <Text style={styles.Deliveryto}>{data.ShowAll}</Text>
            </View>
            <View>
              <FlatList
                data={data2}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <RenderSecond
                     {...{ data2,
                      data,
                      setFavourite,
                      selected,
                      Favourite,
                      item,
                      index,
                      navigation
                    }}
                    />
                  );
                }}
                ItemSeparatorComponent={() => {
                  return <View style={styles.itemSep}></View>;
                }}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.RecommendedContainer}>
              <Text style={styles.description}>{data.Recommended}</Text>
              <Text style={styles.Deliveryto}>{data.ShowAll}</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
                            source={icons.calories}
                          />
                        </View>
                        <View>
                          <TouchableOpacity onPress={() => setFavourite(index)}>
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
          </>
        ) : (
          filterdataDisplay()
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.view} />

        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalTextcontainer}>
              <Text style={styles.ModalSubText}>Filter Your Search</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.crossimageconatainer}>
                <Image source={icons.cross} style={styles.modalcross} />
              </TouchableOpacity>
            </View>
            <View style={styles.distancecontainer}>
              <Text style={styles.ModalSubText}>{data.distance}</Text>
              <Slider
                values={[3, 18]}
                min={1}
                max={20}
                postfix="km"
                onValueChange={(values: any) => setdistance(values)}
                prifix={''}
              />
            </View>

            <View style={styles.distancecontainer}>
              <Text style={styles.ModalSubText}>{data.deliverytime}</Text>
              <CustomTimeBar />
            </View>
            <View style={styles.distancecontainer}>
              <Text style={styles.ModalSubText}>{data.pricingrange}</Text>
              <Slider
                values={[3, 18]}
                min={1}
                max={20}
                prifix="$"
                onValueChange={(values: any) => setprice(values)}
                postfix={undefined}
              />
            </View>

            <View style={styles.distancecontainer}>
              <Text style={styles.ModalSubText}>{data.rating}</Text>
              <CustomRatingBar />
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              setModalVisible(false), setfilterdata(true);
            }}>
            <Text style={styles.filterButtonText}>Apply filter</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

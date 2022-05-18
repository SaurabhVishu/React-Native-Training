import React, {useState} from 'react';
import {dummyData} from '../config/constants';
import Home from '../view/Home';

interface InputProp {
  navigation: any;
}

interface menudata {
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
}
[];
const HomeModel = (props: InputProp) => {
  const [selected, setSelected] = useState(1);
  const [Favourite, setFavourite] = useState(false);

  const {navigation} = props;
  let data2 = dummyData.Foodmenu.filter(a => selected == a.categories);
  //console.log(data2)
  //console.log('value of', selected);
  const [modalVisible, setModalVisible] = useState(false);
  const [distance, setdistance] = useState([]);
  const [price, setprice] = useState([]);
  const [maxtime, setMaxtime] = useState(['10 Mins', '20 Mins', '30 Mins']);
  const [defaulttime, setDefaulttime] = useState('');
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [defaultRating, setDefaultRating] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filterdata, setfilterdata] = useState(false);
  const [isSearch,setisSearch]=useState(false)


  let menudata = dummyData.Foodmenu;


  const SearchData = dummyData.Foodmenu.filter((data: menudata) =>
    data.name.toLowerCase().match(searchText.toLowerCase()),
  ).map((data: any) => data);
 // console.log(searchText, SearchData);
  if (defaultRating != 0) {
    menudata = menudata.filter((a: menudata) => a.rating == defaultRating);
  }
  if (defaulttime != '') {
    menudata = menudata.filter((a: any) => a.time == defaulttime);
  }
  if (distance.length != 0) {
    menudata = menudata.filter(
      (a: any) => a.distance > distance[0] && a.distance < distance[1],
    );
  }
  if (price.length != 0) {
    menudata = menudata.filter(
      (a: any) => a.price > price[0] && a.price < price[1],
    );
  }

  const Resetfilter = () => {
    setDefaultRating(0);
    setDefaulttime('');
    setdistance([]);
    setprice([]);
  };
  type DefaultRootStat = {
    profile: string;
  };
  // console.log("data is ====>time,rate,price",defaulttime,"  ",defaultRating,"  ",price);
  // console.log("New array return is ========>",menudata)

  return (
    <Home
      {...{
        navigation,
        data: dummyData.ScreenData.HomeScreen,
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
        SearchData
      }}
    />
  );
};

export default HomeModel;

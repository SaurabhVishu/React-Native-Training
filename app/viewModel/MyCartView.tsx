import React, {useState} from 'react';
import {dummyData} from '../config/constants';
import MyCart from '../view/MyCart';

interface InputProp {
  navigation: any;
}

const MyCartViewModel = (props: InputProp) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(dummyData.MyCart);
  const DecrementCount = (count: any, index: any) => {
    let tempdata = [...data];
    tempdata[index] = {...tempdata[index], count: count > 0 ? count - 1 : 0};

    setData(tempdata);
  };
  const IncrementCount = (count: any, index: number) => {
    let tempdata = [...data];
    tempdata[index] = {...tempdata[index], count: count + 1};
    setData(tempdata);
  };

  return (
    <MyCart
      {...{
        navigation,
        data,
        text: dummyData.ScreenData.CheckoutScreen,
        setData,
        modalVisible,
        setModalVisible,
        DecrementCount,
        IncrementCount,
      }}
    />
  );
};
export default MyCartViewModel;

import React,{useState} from 'react';
import { dummyData } from '../config/constants';
import MyCoupon from '../view/MyCoupon';

interface InputProp {
  navigation: any;
}

const MyCouponModel = (props: InputProp) => {
 const[selected,setSelected]=useState(false)
  let Filterdata=dummyData.CouponData.filter ((a)=>selected==a.coupon) 
  const {navigation} = props;
  return (
    <MyCoupon
      {...{
        navigation,
        Filterdata,
        selected,
        setSelected,
      }}
    />
  );
};
export default MyCouponModel;

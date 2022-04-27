import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawer';
import SuccessModel from '../viewModel/SuccessViewModel';
import HomeModel from '../viewModel/homeViewModel';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();


 const DrawerNavigation=()=> {
    return (
        <Drawer.Navigator drawerContent={(props) =>
         <CustomDrawerContent {...props} />}>
         <Drawer.Screen  name="BottomTab"  component={BottomTab}
         options={{headerShown: false}}
         />
      </Drawer.Navigator>
    );
  }
  export default DrawerNavigation
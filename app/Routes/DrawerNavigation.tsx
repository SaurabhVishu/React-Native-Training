import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawer';
import SuccessModel from '../viewModel/SuccessViewModel';

const Drawer = createDrawerNavigator();


 const DrawerNavigation=()=> {
    return (
        <Drawer.Navigator drawerContent={(props) =>
         <CustomDrawerContent {...props} />}>
         <Drawer.Screen  name="Success"  component={SuccessModel}/>
      </Drawer.Navigator>
    );
  }
  export default DrawerNavigation
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawer';
import Roottab from './tabNavigation/Roottab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTab"
        component={Roottab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;

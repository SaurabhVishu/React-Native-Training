import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {constants, dummyData, icons, images} from '../../config/constants';
import style from './style';

const CustomDrawerContent = (props: any) => {
  const {navigation} = props;
  const [selected, setSelected] = useState(0);
  return (
    <View style={style.MainContainer}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={icons.cross} style={style.cross} />
        </TouchableOpacity>
        <View style={style.ProfileContainer}>
          <Image source={images.profile} style={style.profileicon} />
          <View style={style.byProgrammerView}>
            <Text style={style.ByProgrammer}>
              {constants.DrawerText.ByProgrammer}
            </Text>
            <Text style={style.ViewProfile}>
              {constants.DrawerText.ViewYourProfile}
            </Text>
          </View>
        </View>
        <View style={style.mapContainer}>
          {dummyData.DrawerButton.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={
                    selected == index
                      ? style.mapItemViewTrue
                      : style.mapItemView
                  }
                  activeOpacity={0.2}
                  onPress={() => {
                    setSelected(index),navigation.navigate(item.routeName)
                  }}>
                  <Image source={item.icon} style={style.mapIcon} />
                  <Text style={style.ButtonName}>{item.title}</Text>
                </TouchableOpacity>
                {index == 3 && <View style={style.LineSeprator}></View>}
              </View>
            );
          })}
        </View>
      </View>

      <TouchableOpacity style={style.mapItemView}>
        <Image source={icons.logout} style={style.mapIcon} />

        <Text style={style.ButtonName}>{constants.Button.logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;

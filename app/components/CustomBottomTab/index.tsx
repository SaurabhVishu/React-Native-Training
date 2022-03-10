import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {dummyData, icons} from '../../config/constants';
import styles from './style';

const MyTabBar = (props: any) => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.mainContainer}>
      {dummyData.BottomTab.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => setSelected(index)}
            style={
              selected == index ? styles.btnContainer : styles.FbtnContainer
            }>
            <Image
              source={item.icon}
              style={selected == index ? styles.icon : styles.iconFales}
            />
            {selected == index && (
              <Text style={styles.title}>{item.title}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

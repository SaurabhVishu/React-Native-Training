import React from 'react';
import {View, Text, SectionList, Image} from 'react-native';
import Header from '../../Common/Header';
import {constants, icons} from '../../config/constants';
import styles from './style';

interface InputProp {
  navigation: any;
  DATA: any;
}

const Notification2Screen = (props: InputProp) => {
  const {navigation, DATA} = props;
  const RenderItem = () => {
    return (
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => (
          <View style={styles.RenItem}>
            <View
              style={styles.RenImageContainer}>
              <Image source={item.image} style={styles.renImg} />
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.Subtitle}>{item.subtitle}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.Heading}>{title}</Text>
        )}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header
        name={constants.screens.notifi}
        leftIcon={icons.back}
        rytIcon={icons.profile}
        leftNavigation={()=>navigation.goBack()} 
      />

      <RenderItem />
    </View>
  );
};

export default Notification2Screen;

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import style from '../../components/CustomDrawer/style';
import {constants, dummyData, icons} from '../../config/constants';
import styles from './style';

interface Inputprop {
  navigation: any;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapViewScreen = (props: Inputprop) => {
  const {navigation, modalVisible, setModalVisible} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        zoomEnabled={true}
        mapType={'terrain'}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.5995001,
          longitude: 77.3315623,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}
        onPress={()=>navigation.goBack()}
        >
          <Image source={icons.back} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalVisible(true)}>
          <Image source={icons.globe} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}>
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.upperModalView}></View>
          </TouchableWithoutFeedback>
          <View style={styles.mapContainer}>
            {dummyData.MapViewData.map((item, index) => {
              return (
                <View key={index} style={styles.mapItem}>
                  <Image source={item.icon} style={style.icon} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
            <TouchableOpacity
              style={styles.callBtn}
              onPress={() => setModalVisible(false)}>
              <View style={styles.btnIconImgContainer}>
                <Image source={icons.profile} style={styles.profile} />
                <View style={styles.btnTextContainer}>
                  <Text style={styles.btnName}>
                    {constants.Button.Byprogrammer}
                  </Text>
                  <Text style={styles.deliveryText}>
                    {constants.Button.DeliveryMan}
                  </Text>
                </View>
              </View>
              <View></View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MapViewScreen;

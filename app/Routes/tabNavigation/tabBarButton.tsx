import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../config/constants';
import styles from './style'

export const TabButton = (props: any) => {
  const {icon, label, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.tabButtonContainer, {flex: focused ? 1 : 0.5}]}>
      <View
        style={[
          styles.tabViewContainer,
          {
            backgroundColor: focused ? COLORS.primary : COLORS.white,
          },
        ]}>
        <Image
          source={icon}
          style={{
            tintColor: focused ? COLORS.white : COLORS.gray,
            height: 25,
            width: 25,
          }}
        />
        {focused && (
          <View>
            <Text style={styles.bottomLabelText}>{label}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

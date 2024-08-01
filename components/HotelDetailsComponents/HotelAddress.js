import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hotelLocationIcon} from '../icons/icons';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const HotelAddress = ({address}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: '80%',
        padding: 5,
      }}>
      <Text
        style={{
          color: GENERAL_COLORS.textColor,
          fontFamily: 'PlaywriteFRModerne-Regular',
          fontSize: 12,
          textAlign: 'center',
        }}>
        <View>{hotelLocationIcon}</View>
        {address}
      </Text>
    </View>
  );
};

export default HotelAddress;

const styles = StyleSheet.create({});

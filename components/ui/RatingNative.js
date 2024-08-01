import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlurContainer from './BlurContainer';
import {starIcon} from '../icons/icons';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const RatingNative = ({rating}) => {
  return (
    <View
      style={{
        backgroundColor: GENERAL_COLORS.black + 90,
        width: 40,
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 3,
        borderRadius: 6,
      }}>
      {starIcon}
      <Text style={{color: GENERAL_COLORS.textColor, fontSize: 16}}>
        {rating}
      </Text>
    </View>
  );
};

export default RatingNative;

const styles = StyleSheet.create({});

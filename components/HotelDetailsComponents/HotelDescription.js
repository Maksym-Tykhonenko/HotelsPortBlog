import {StyleSheet, Text, View} from 'react-native';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const HotelDescription = ({description}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginVertical: 10,
          color: GENERAL_COLORS.textColor,
          fontWeight: '600',
        }}>
        DESCRIPTION
      </Text>
      <Text
        style={{
          color: GENERAL_COLORS.textColor,
          // fontFamily: 'PlaywriteFRModerne-Thin',
          fontSize: 14,
          fontWeight: 'heavy',
          textAlign: 'center',
        }}>
        {description}
      </Text>
    </View>
  );
};

export default HotelDescription;

const styles = StyleSheet.create({});

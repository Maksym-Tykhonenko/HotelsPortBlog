import {StyleSheet, Text, View} from 'react-native';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const HotelPrice = ({min, max}) => {
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
        PRICE
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: GENERAL_COLORS.textColor,
          marginVertical: 6,
        }}>
        from-{min}$ to-{max}$ per/night
      </Text>
    </View>
  );
};

export default HotelPrice;

const styles = StyleSheet.create({});

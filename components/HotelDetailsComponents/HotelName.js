import {StyleSheet, Text, View} from 'react-native';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
import BlurContainer from '../ui/BlurContainer';

const HotelName = ({name}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <BlurContainer style={{width: 'auto'}} blurIntense={1}>
        <Text
          style={{
            color: GENERAL_COLORS.mainBg3,
            // fontFamily: 'PlaywriteFRModerne-Regular',
            fontSize: 26,
            fontWeight: 'heavy',
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </BlurContainer>
    </View>
  );
};

export default HotelName;

const styles = StyleSheet.create({});

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {LinearGradientCustom} from '../ui';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const HeaderCustom = () => {
  return (
    <LinearGradientCustom
      style={{
        height: 300,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
      }}
      colors={[
        GENERAL_COLORS.green1,
        GENERAL_COLORS.green2,
        GENERAL_COLORS.green1,
      ]}>
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={styles.nameText}>"Portuch"</Text>
        <Text style={styles.sloganText}>France Hotels Blog</Text>
      </SafeAreaView>
    </LinearGradientCustom>
  );
};

export default HeaderCustom;

const styles = StyleSheet.create({
  nameText: {
    color: GENERAL_COLORS.textColor,
    fontSize: 46,
    // fontFamily: 'PlaywriteFRModerne-Regular',
  },
  sloganText: {
    color: GENERAL_COLORS.textColor,
    // fontFamily: 'PlaywriteFRModerne-ExtraLight',
    fontSize: 18,
  },
});

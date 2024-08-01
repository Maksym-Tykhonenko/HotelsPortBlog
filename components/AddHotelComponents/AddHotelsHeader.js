import {SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradientCustom} from '../ui';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const AddHotelsHeader = ({children}) => {
  return (
    <LinearGradientCustom
      style={{
        height: 100,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
      }}
      colors={[GENERAL_COLORS.green1, GENERAL_COLORS.green2, GENERAL_COLORS.green3]}>
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {children}
      </SafeAreaView>
    </LinearGradientCustom>
  );
};

export default AddHotelsHeader;

const styles = StyleSheet.create({});

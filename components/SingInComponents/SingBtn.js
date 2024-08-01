import {StyleSheet} from 'react-native';
import {LinearGradientCustom, CustomButton} from '../ui';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const SingBtn = ({children, positionStyle, onPressFn}) => {
  return (
    <LinearGradientCustom
      style={[styles.gradientContainer, positionStyle]}
      colors={[
        GENERAL_COLORS.green1,
        GENERAL_COLORS.green2,
        GENERAL_COLORS.green1,
      ]}>
      <CustomButton
        btnContainer={styles.btnContainer}
        btnText={styles.btnText}
        onPressFn={onPressFn}>
        {children}
      </CustomButton>
    </LinearGradientCustom>
  );
};

export default SingBtn;

const styles = StyleSheet.create({
  signUp: {
    borderWidth: 2,
    fontSize: 18,
    width: 300,
    borderRadius: 20,
  },
  gradientContainer: {
    width: 300,
    borderRadius: 20,
  },
  btnContainer: {
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
  },
  btnText: {
    fontSize: 18,
    color: GENERAL_COLORS.textColor,
    fontWeight: '700',
  },
});

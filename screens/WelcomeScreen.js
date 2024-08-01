import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {LinearGradientCustom} from '../components/ui';
import {GENERAL_COLORS} from '../constants/GeneralColors';

const WelcomeScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.replace('TabNavigator'));
  }, [fadeAnim]);

  return (
    <LinearGradientCustom
      colors={['#5647cf', '#2e1c72', '#150e48']}
      style={styles.gradienContainer}>
      <Animated.View style={[{opacity: fadeAnim}, styles.textContainer]}>
        <Text
          style={[
            styles.textFamily,
            {fontSize: 42, color: GENERAL_COLORS.textColor, marginVertical: 12},
          ]}>
          Start{' '}
        </Text>
        <Text
          style={[
            styles.textFamily,
            {fontSize: 42, color: GENERAL_COLORS.textColor, marginVertical: 12},
          ]}>
          Your Journey
        </Text>
        <Text
          style={[
            styles.textFamily,
            {fontSize: 42, color: GENERAL_COLORS.textColor, marginVertical: 12},
          ]}>
          With "Portuch"
        </Text>
        <Text
          style={[
            styles.textFamily,
            {fontSize: 42, color: GENERAL_COLORS.textColor, marginVertical: 12},
          ]}>
          Hotels Blog
        </Text>
      </Animated.View>
    </LinearGradientCustom>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  gradienContainer: {
    backgroundColor: GENERAL_COLORS.mainBg1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {fontFamily: 'PlaywriteFRModerne-Regular'},
  textFamily: {
    fontFamily: 'PlaywriteFRModerne-Regular',
  },
  styleText: {
    fontSize: 40,
  },
});

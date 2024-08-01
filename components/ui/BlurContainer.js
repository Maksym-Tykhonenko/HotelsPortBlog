import {StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurContainer = ({children, blurIntense, style}) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Text>BlurContainer</Text> */}
      {/* <Text style={styles.absolute}>Hi, I am some blurred text</Text> */}
      {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={blurIntense}
        reducedTransparencyFallbackColor="white"
      />
      {/* <Text>
        I'm the non blurred text because I got rendered on top of the BlurView
    </Text> */}
      {children}
    </View>
  );
};

export default BlurContainer;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // flex: 1,
    padding: 4,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8,
  },
});

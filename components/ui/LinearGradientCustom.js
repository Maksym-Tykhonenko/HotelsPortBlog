import LinearGradient from 'react-native-linear-gradient';
const LinearGradientCustom = ({children, colors, style}) => {
  return (
    <LinearGradient style={[style]} colors={colors}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientCustom;

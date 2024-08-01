import {SafeAreaView, ImageBackground} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <ImageBackground
      // source={require('../assets/img/republicFrance.jpg')}
      source={require('../../assets/img/lavand.jpg')}
      style={{alignItems: 'center'}}>
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default MainLayout;

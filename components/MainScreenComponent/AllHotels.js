import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {LinearGradientCustom} from '../ui';
import AllHotelsGrid from './AllHotelsGrid';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
import {useNavigation} from '@react-navigation/native';

const AllHotels = ({data}) => {
  const navigation = useNavigation();
  function renderHotels({item}) {
    function hotelDetail() {
      navigation.navigate('HotelDetailsScreen', {hotelId: item.id});
    }

    return <AllHotelsGrid item={item} onPressFn={hotelDetail} />;
  }

  return (
    <LinearGradientCustom
      colors={[
        GENERAL_COLORS.green1,
        GENERAL_COLORS.green2 + 50,
        GENERAL_COLORS.green3 + 10,
      ]}
      style={{
        alignItems: 'center',
        height: '100%',
        borderRadiusTop: 20,
      }}>
      {/* <ImageBackground
      source={require('../../assets/img/bg.png')}
      style={{
        alignItems: 'center',
        height: '100%',
        borderRadiusTop: 20,
      }}> */}
      <SafeAreaView style={{height: 500}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderHotels}
        />
      </SafeAreaView>
      {/* </ImageBackground> */}
    </LinearGradientCustom>
  );
};

export default AllHotels;

const styles = StyleSheet.create({});

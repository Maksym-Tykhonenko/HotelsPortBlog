import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinearGradientCustom, RatingNative} from '../ui';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
import {FavoriteIcon} from '../icons/icons';
import {useNavigation} from '@react-navigation/native';

const FavHotelItem = ({item}) => {
  const navigation = useNavigation();
  const image = item.images[0];

  function handleHotelDetails() {
    navigation.navigate('HotelDetailsScreen', {hotelId: item.id});
  }
  return (
    <TouchableOpacity
      onPress={handleHotelDetails}
      activeOpacity={0.6}
      style={{
        borderWidth: 1,
        borderRadius: 16,
        marginVertical: 5,
        padding: 4,
        flexDirection: 'row',
        gap: 2,
      }}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: image}}
        style={{
          height: 150,
          width: 150,
          overflow: 'hidden',
          alignItems: 'flex-end',
          padding: 5,
          borderTopStartRadius: 12,
          borderBottomLeftRadius: 12,
          justifyContent: 'space-between',
        }}>
        <RatingNative rating={item.rating} />
        <View>{/* <FavoriteIcon isHotelFavorite={item.isFavorite} /> */}</View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          borderEndEndRadius: 12,
          borderTopEndRadius: 12,
          overflow: 'hidden',
          gap: 2,
        }}>
        {/* <View
          style={{
            borderRadius: 1,
            flex: 1,
            backgroundColor: GENERAL_COLORS.mainBg1,
            // flexDirection: 'row',
            padding: 3,
          }}> */}
        <LinearGradientCustom
          colors={[
            GENERAL_COLORS.green1,
            GENERAL_COLORS.green2,
            GENERAL_COLORS.green1,
          ]}
          style={{
            backgroundColor: GENERAL_COLORS.mainBg1,
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: 'PlaywriteFRModerne-Regular',
              color: GENERAL_COLORS.textColor,
              fontWeight: '900',
              textAlign: 'center',
            }}>
            {item.hotelName}
          </Text>
        </LinearGradientCustom>
        {/* </View> */}
        <LinearGradientCustom
          colors={[
            GENERAL_COLORS.green1,
            GENERAL_COLORS.green2,
            GENERAL_COLORS.green1,
          ]}
          style={{
            borderRadius: 1,
            flex: 1,
            backgroundColor: GENERAL_COLORS.mainBg5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'PlaywriteFRModerne-Regular',
              color: GENERAL_COLORS.textColor,
              fontWeight: '900',
              fontSize: 12,
              textAlign: 'center',
            }}>
            {item.address}
          </Text>
        </LinearGradientCustom>
      </View>
    </TouchableOpacity>
  );
};

export default FavHotelItem;

const styles = StyleSheet.create({});

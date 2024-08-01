import {Image, ScrollView, StyleSheet, View} from 'react-native';
import useHotelsData from '../components/hooks/useHotelsData';
import {
  HotelAddress,
  HotelEntertainment,
  HotelGallery,
  HotelName,
  HotelPrice,
  ImageHeader,
  ModalMap,
  RatingHotel,
} from '../components/HotelDetailsComponents';
import {
  CalendarNative,
  LinearGradientCustom,
  ReturnBtn,
  ShowMap,
} from '../components/ui';
import {FavoriteIcon} from '../components/icons/icons';
import HotelDescription from '../components/HotelDetailsComponents/HotelDescription';
import {useCallback, useEffect, useState} from 'react';
import {
  addFavoriteHotel,
  removeFavoriteHotel,
  updateHotelRating,
} from '../components/utils/hotelsData';
import {useHotels} from '../store/context';
import {useFocusEffect} from '@react-navigation/native';
import { GENERAL_COLORS } from '../constants/GeneralColors';

const HotelDetailsScreen = ({route, navigation}) => {
  const [isModalMap, setIsModalMap] = useState(false);
  const {hotelData, getHotelsData} = useHotelsData();
  // const {hotels, toggleFavoriteHotel} = useHotels();
  const HOTEL_ID = route.params.hotelId;
  const HOTEL = hotelData.find(hotel => hotel.id === HOTEL_ID);
  // const FavoriteHotel = hotels.find(hotel => hotel.id === HOTEL_ID);
  const [isFavorite, setIsFavorite] = useState(
    HOTEL ? HOTEL.isFavorite : false,
  );
  const RATING = HOTEL?.rating;
  useEffect(() => {
    if (HOTEL) {
      setIsFavorite(HOTEL.isFavorite);
    }
  }, [HOTEL]);

  if (!HOTEL) {
    return;
  }


  const LAT = HOTEL.position.latitude;
  const LONG = HOTEL.position.longitude;

  async function favoriteHandle() {
    if (isFavorite) {
      await removeFavoriteHotel(HOTEL_ID);
    } else {
      await addFavoriteHotel(HOTEL_ID);
    }
    setIsFavorite(!isFavorite);
    await getHotelsData();
    // if (HOTEL.isFavorite) {
    //   removeFavoriteHotel(HOTEL_ID);
    // } else {
    //   addFavoriteHotel(HOTEL_ID);
    // }
    // await getHotelsData();
    // toggleFavoriteHotel(HOTEL_ID);
  }

  async function hotelRatingHandle(value) {
    updateHotelRating(HOTEL_ID, value);
  }

  return (
    <View style={{flex: 1}}>
      <ImageHeader image={HOTEL.images[0]}>
        <HotelName name={HOTEL.hotelName} />
        <ReturnBtn rating={RATING} />
        <HotelGallery images={HOTEL.images} />
      </ImageHeader>

      <LinearGradientCustom
        colors={[GENERAL_COLORS.green1, GENERAL_COLORS.green2, GENERAL_COLORS.green3]}
        style={styles.gradientStyle}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.ratingContainer}>
            <RatingHotel onRatingHandle={hotelRatingHandle} rating={RATING} />
            {/* <Image
              source={{uri: HOTEL.images[0]}}
              style={{width: 30, height: 30}}
            /> */}
            <FavoriteIcon
              onPressFn={() => favoriteHandle()}
              // isHotelFavorite={FavoriteHotel?.isFavorite}
              isHotelFavorite={HOTEL.isFavorite}
            />
          </View>
          <HotelPrice min={HOTEL.price.min} max={HOTEL.price.max} />
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            <HotelAddress address={HOTEL.address} />
            <ShowMap onPressFn={() => setIsModalMap(true)} />
            <ModalMap
              longitude={LONG}
              latitude={LAT}
              isOpen={isModalMap}
              onClose={() => setIsModalMap(false)}
            />
          </View>
          <HotelDescription description={HOTEL.description} />
          <HotelEntertainment data={HOTEL.entertainment} />
          <CalendarNative />
        </ScrollView>
      </LinearGradientCustom>
    </View>
  );
};

export default HotelDetailsScreen;

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

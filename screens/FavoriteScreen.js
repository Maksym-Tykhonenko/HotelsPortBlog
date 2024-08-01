import {ImageBackground, StyleSheet, Text} from 'react-native';
import {AddHotelsHeader} from '../components/AddHotelComponents';
import {GENERAL_COLORS} from '../constants/GeneralColors';
import {fetchHotelsData} from '../components/utils/hotelsData';
import {useEffect, useState, useCallback} from 'react';
import {FavHotelsGrid} from '../components/FavoriteScreenComponents';
import {useFocusEffect} from '@react-navigation/native';

const FavoriteScreen = () => {
  const [hotels, setHotels] = useState();
  const isFavoriteHotels = hotels?.filter(hotel => hotel.isFavorite === true);

  const initHotels = async () => {
    try {
      const data = await fetchHotelsData();
      setHotels(data);
    } catch (error) {
      console.error('Error favorite screen', error);
    }
  };

  useEffect(() => {
    initHotels();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const data = await fetchHotelsData();
          setHotels(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []),
  );

  return (
    <>
      <AddHotelsHeader>
        <Text style={styles.headerText}>Favorite Hotels</Text>
      </AddHotelsHeader>
      <FavHotelsGrid data={isFavoriteHotels} />
    </>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  headerText: {
    color: GENERAL_COLORS.textColor,
    fontSize: 22,
    // fontFamily: 'PlaywriteFRModerne-Regular',
  },
});

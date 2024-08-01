import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {AllHotels} from '../components/MainScreenComponent';
import {DropDown} from '../components/ui';
import BlurContainer from '../components/ui/BlurContainer';
import {useCallback, useEffect, useState} from 'react';
import {fetchHotelsData, initHotelsData} from '../components/utils/hotelsData';
import {HOTELS} from '../data/hotels';
import {useFocusEffect} from '@react-navigation/native';
import {AddNewHotelIcon} from '../components/icons/icons';

const MainScreen = ({navigation}) => {
  const [region, setRegion] = useState([]);
  const [hotels, setHotels] = useState();
  const [isDataInitialized, setIsDataInitialized] = useState(false);

  const initializeData = async () => {
    try {
      const data = await fetchHotelsData();
      if (data.length === 0) {
        await initHotelsData(HOTELS);
        setHotels(HOTELS);
      } else {
        setHotels(data);
      }
      setIsDataInitialized(true);
    } catch (error) {
      console.error('Error initializing data', error);
    }
  };

  useEffect(() => {
    initializeData();
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
      if (isDataInitialized) {
        fetchData();
      }
    }, [isDataInitialized]),
  );
  const sortedHotels =
    region.length === 0
      ? hotels
      : hotels.filter(hotel => region.includes(hotel.region));

  const REGION = () => {
    const uniq = hotels?.map(hotel => hotel.region);
    return [...new Set(uniq)];
  };

  function addNewHotelsHandler() {
    navigation.navigate('AddHotelScreen');
  }

  //
  // const updateHotelFavoriteStatus = hotelId => {
  //   const updatedHotels = hotels.map(hotel => {
  //     if (hotel.id === hotelId) {
  //       return {...hotel, isFavorite: !hotel.isFavorite};
  //     }
  //     return hotel;
  //   });
  //   setHotels(updatedHotels);
  //   initHotelsData(updatedHotels); // Update AsyncStorage
  // };

  return (
    <View>
      <ImageBackground
        source={require('../assets/img/lavand.jpg')}
        style={styles.image}>
        <SafeAreaView>
          <AddNewHotelIcon onPressFn={addNewHotelsHandler} />
          <BlurContainer blurIntense={3}>
            <DropDown data={REGION} selected={value => setRegion(value)} />
          </BlurContainer>
        </SafeAreaView>
      </ImageBackground>
      <AllHotels data={sortedHotels} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    padding: 20,
    zIndex: 100,
  },
});

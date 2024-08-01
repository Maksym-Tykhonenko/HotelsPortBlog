import AsyncStorage from '@react-native-async-storage/async-storage';

export const initHotelsData = async hotels => {
  try {
    await AsyncStorage.setItem('hotels', JSON.stringify(hotels));
  } catch (error) {
    console.log('Hotels data saving erroro', error);
  }
};

export const fetchHotelsData = async () => {
  try {
    const hotelsData = await AsyncStorage.getItem('hotels');
    const allHotels = hotelsData ? JSON.parse(hotelsData) : [];
    return allHotels;
  } catch (error) {}
};

export const createHotel = async newHotel => {

  try {
    const hotels = await fetchHotelsData();
    const updatedHotelsData = [newHotel, ...hotels];
    await initHotelsData(updatedHotelsData);
  } catch (error) {
    console.error('Adding new hotel issue', error);
  }
};

export const addFavoriteHotel = async hotelId => {
  try {
    const hotels = await fetchHotelsData();
    const updatedHotels = hotels.map(hotel => {
      if (hotel.id === hotelId) {
        return {...hotel, isFavorite: true};
      }
      return hotel;
    });
    await initHotelsData(updatedHotels);
  } catch (error) {}
};

export const removeFavoriteHotel = async hotelId => {
  try {
    const hotels = await fetchHotelsData();
    const updatedHotels = hotels.map(hotel => {
      if (hotel.id === hotelId) {
        return {...hotel, isFavorite: false};
      }
      return hotel;
    });
    await initHotelsData(updatedHotels);
  } catch (error) {}
};

export const updateHotelRating = async (hotelId, rating) => {
  try {
    const hotels = await fetchHotelsData();
    const updatedHotels = hotels.map(hotel => {
      if (hotel.id === hotelId) {
        return {...hotel, rating: rating};
      }
      return hotel;
    });
    await initHotelsData(updatedHotels);
  } catch (error) {}
};

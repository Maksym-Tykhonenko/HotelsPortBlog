// import React, {createContext, useContext, useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   fetchHotelsData,
//   initHotelsData,
//   createHotel,
//   addFavoriteHotel,
//   removeFavoriteHotel,
// } from '../components/utils/hotelsData';

// const HotelsContext = createContext();

// export const HotelsProvider = ({children}) => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchHotelsData();
//       setHotels(data);
//     };
//     fetchData();
//   }, []);

//   const updateHotels = async updatedHotels => {
//     setHotels(updatedHotels);
//     await AsyncStorage.setItem('hotels', JSON.stringify(updatedHotels));
//   };

//   const toggleFavoriteHotel = async hotelId => {
//     const hotel = hotels.find(h => h.id === hotelId);
//     if (hotel) {
//       if (hotel.isFavorite) {
//         await removeFavoriteHotel(hotelId);
//       } else {
//         await addFavoriteHotel(hotelId);
//       }
//       const updatedHotels = await fetchHotelsData();
//       setHotels(updatedHotels);
//     }
//   };

//   const setHotelRating=async hotelId=>{}

//   return (
//     <HotelsContext.Provider
//       value={{hotels, setHotels, updateHotels, toggleFavoriteHotel}}>
//       {children}
//     </HotelsContext.Provider>
//   );
// };

// export const useHotels = () => useContext(HotelsContext);
//////////////////////////////////////////////////////////////
// import React, {createContext, useContext, useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HotelsContext = createContext();

// export const HotelsProvider = ({children}) => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchHotelsData();
//       setHotels(data);
//     };
//     fetchData();
//   }, []);

//   const updateHotels = async updatedHotels => {
//     setHotels(updatedHotels);
//     await AsyncStorage.setItem('hotels', JSON.stringify(updatedHotels));
//   };

//   const addFavoriteHotel = async hotelId => {
//     const updatedHotels = hotels.map(hotel =>
//       hotel.id === hotelId ? {...hotel, isFavorite: !hotel.isFavorite} : hotel,
//     );
//     await updateHotels(updatedHotels);
//   };

//   return (
//     <HotelsContext.Provider
//       value={{hotels, setHotels, updateHotels, addFavoriteHotel}}>
//       {children}
//     </HotelsContext.Provider>
//   );
// };

// export const useHotels = () => useContext(HotelsContext);

// const fetchHotelsData = async () => {
//   try {
//     const hotelsData = await AsyncStorage.getItem('hotels');
//     return hotelsData ? JSON.parse(hotelsData) : [];
//   } catch (error) {
//     console.error('Fetching hotels data error', error);
//     return [];
//   }
// };

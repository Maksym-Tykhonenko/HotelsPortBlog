import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';

export const returnIcon = (
  <Ionicons name="chevron-back" color={GENERAL_COLORS.mainBg5} size={32} />
);

export const starIcon = <Icon name="star" color="yellow" size={20} />;

export const myIcon = <Icon name="glass" size={30} color="#900" />;

export const userTabIcon = color => (
  <Image
    source={require('../../assets/icons/user.png')}
    style={{color: 'white', width: 35, height: 35}}
  />
);

//
export const favoritesHotelsTabIcon = color => (
  <Image
    source={require('../../assets/icons/heart.png')}
    style={{color: 'white', width: 30, height: 30}}
  />
);

//
export const hotelsTabIcon = color => (
  <Image
    source={require('../../assets/icons/hotel1.png')}
    style={{color: `${color}`, width: 30, height: 30}}
  />
);

//
export const add = <Text style={{fontSize: 30, color: 'red'}}>+</Text>;

//
export const mapIcoon = (
  <Image
    source={require('../../assets/icons/map1.png')}
    style={{color: 'white', width: 35, height: 35}}
  />
);

//
export const hotelLocationIcon = (
  <Image
    source={require('../../assets/icons/map.png')}
    style={{color: 'white', width: 20, height: 20}}
  />
);

//
export const FavoriteIcon = ({isHotelFavorite, onPressFn}) => {
  return (
    <TouchableOpacity style={{marginVertical: 5}} onPress={onPressFn}>
      <MaterialIcons
      //name="favorite"
      //color="green"
      ////color={isHotelFavorite ? 'red' : 'white'}
      //size={32}
      //onPress={() => favoriteHandle(ITEM.id)}
      />
    </TouchableOpacity>
  );
};

//
export const addHotel = (
  <Image
    source={require('../../assets/icons/hotel.png')}
    style={{color: '#800080', width: 40, height: 40}}
  />
);

//
export const AddNewHotelIcon = ({onPressFn}) => {
  return (
    <TouchableOpacity
      onPress={onPressFn}
      activeOpacity={0.6}
      style={{marginVertical: 5}}>
      <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
        <Text
          style={{
            color: GENERAL_COLORS.mainBg1,
            fontSize: 18,
            fontWeight: '800',
          }}>
          +
        </Text>
        {addHotel}
      </View>
    </TouchableOpacity>
  );
};

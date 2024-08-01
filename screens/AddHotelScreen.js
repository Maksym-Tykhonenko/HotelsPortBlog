import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Layout} from '../components/AddHotelComponents';
import {ImagePicker, InputCustom, ReturnBtn} from '../components/ui';
import SingBtn from '../components/SingInComponents/SingBtn';
import {createHotel, fetchHotelsData} from '../components/utils/hotelsData';
import {useNavigation} from '@react-navigation/native';

const AddHotelScreen = ({onReturn}) => {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);
  const [newHotel, setNewHotel] = useState({
    id: Math.random().toString(),
    address: '',
    hotelName: '',
    region: '',
    position: {latitude: '', longitude: ''},
    images: [],
    isFavorite: false,
    rating: '3',
    entertainment: [],
    price: {min: '', max: ''},
    description: '',
  });
  // console.log(newHotel);

  function inputsHandler(identifier, value) {
    setNewHotel(prevValue => {
      if (identifier.includes('.')) {
        const keys = identifier.split('.');
        return {
          ...prevValue,
          [keys[0]]: {
            ...prevValue[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        return {...prevValue, [identifier]: value};
      }
    });
  }
  function handleEntertainment(text) {
    const textData = text.split(' ');
    inputsHandler('entertainment', textData);
  }

  function imageHandler(image) {
    setImages(prevImages => {
      const updatedImages = [...prevImages, ...image];
      inputsHandler('images', updatedImages);
      return updatedImages;
    });
  }

  function submitHotel() {
    createHotel(newHotel).then(() => {
      // if (onReturn) {
      //   onReturn();
      // }
      navigation.navigate('MainScreen');
    });
  }

  return (
    // <ImageBackground source={require('../assets/img/bg.png')} style={{flex: 1}}>
    <Layout>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'flex-start',
            marginVertical: 15,
          }}></View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <InputCustom
            value={newHotel.hotelName}
            onChangeText={value => inputsHandler('hotelName', value)}
            label={'Hotel'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
          />
          <InputCustom
            value={newHotel.region}
            onChangeText={value => inputsHandler('region', value)}
            label={'Region'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <InputCustom
            value={newHotel.address}
            onChangeText={value => inputsHandler('address', value)}
            label={'Address'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={{flex: 1}}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <InputCustom
            value={newHotel.position.longitude}
            onChangeText={value => inputsHandler('position.longitude', value)}
            label={'Longitude'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
            keyboardType={'numeric'}
          />
          <InputCustom
            value={newHotel.position.latitude}
            onChangeText={value => inputsHandler('position.latitude', value)}
            label={'Latitude'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <InputCustom
            value={newHotel.price.min}
            onChangeText={value => inputsHandler('price.min', value)}
            label={'Price min'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
            maxLength={4}
            keyboardType={'numeric'}
          />
          <InputCustom
            value={newHotel.price.max}
            onChangeText={value => inputsHandler('price.max', value)}
            label={'Price max'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={styles.inputContainer}
            maxLength={4}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <InputCustom
            value={newHotel.entertainment}
            onChangeText={value => handleEntertainment(value)}
            label={'Entertainment (write with a space)'}
            styleText={styles.labelStyle}
            style={styles.inputField}
            styleContainer={{flex: 1}}
          />
        </View>
        <ImagePicker
          btnStyle={[styles.inputField, {marginVertical: 10}]}
          style={{fontSize: 16}}
          handleImage={image => imageHandler(image)}>
          Insert Images
        </ImagePicker>
        <View style={{flexDirection: 'row'}}>
          <InputCustom
            value={newHotel.description}
            onChangeText={value => inputsHandler('description', value)}
            label={'Description'}
            styleText={styles.labelStyle}
            style={[styles.inputField, {minHeight: 100}]}
            styleContainer={{flex: 1}}
          />
        </View>

        <SingBtn
          positionStyle={{
            // position: 'absolute',
            marginTop: 20,
          }}
          onPressFn={submitHotel}>
          Create
        </SingBtn>
      </View>
    </Layout>
    // </ImageBackground>
  );
};

export default AddHotelScreen;

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    // width: 300,
    borderRadius: 20,
    paddingLeft: 15,
    // flex: 1,
  },
  labelStyle: {
    marginBottom: 5,
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 6,
    flex: 1,
  },
});

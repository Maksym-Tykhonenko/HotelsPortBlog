import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BlurContainer from '../ui/BlurContainer';

const AllHotelsGrid = ({item, onPressFn}) => {


  const NAME = item.hotelName;
  const ADDRESS = item.address;

  const IMAGE = item.images && item.images.length > 0 ? item.images[0] : null;
  return (
    <TouchableOpacity
      style={styles.rootContainer}
      activeOpacity={0.6}
      onPress={onPressFn}>
      <ImageBackground
        source={{uri: IMAGE}}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <BlurContainer blurIntense={5}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
              {NAME}
            </Text>
          </BlurContainer>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AllHotelsGrid;

const styles = StyleSheet.create({
  rootContainer: {
    width: 180,
    height: 180,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  textContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    gap: 6,
  },
});

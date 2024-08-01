import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapApple = ({longitude, latitude, containerStyle}) => {
 
  return (
    <View style={[styles.container, containerStyle]}>
      <MapView
        // style={[styles.mapStyle, containerStyle]}
        style={styles.mapStyle}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </MapView>
    </View>
  );
};

export default MapApple;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
});

// const styles = StyleSheet.create({
//   mapStyle: {
//     // height: 1,
//     height: 300,
//     // marginBottom: 30,
//     marginHorizontal: 6,
//     borderRadius: 20,
//   },
// });

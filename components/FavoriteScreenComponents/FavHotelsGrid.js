import {StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import FavHotelItem from './FavHotelItem';

const FavHotelsGrid = ({data}) => {
  function renderFavHotels({item}) {
    return <FavHotelItem item={item} />;
  }

  return (
    <View style={{padding: 10, flex: 1}}>
      <SafeAreaView style={{flex: 1, marginBottom: 100}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderFavHotels}
        />
      </SafeAreaView>
    </View>
  );
};

export default FavHotelsGrid;

const styles = StyleSheet.create({});

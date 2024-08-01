import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const HotelEntertainment = ({data}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 8,
          color: GENERAL_COLORS.textColor,
          marginHorizontal: 10,
        }}>
        Amenities
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginVertical: 10, marginHorizontal: 5}}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderRadius: 20,
                // borderColor: COLORS.activeTind,
                justifyContent: 'center',
                alignItems: 'center',
                width: 'auto',
                backgroundColor: GENERAL_COLORS.textColor + 30,
                marginHorizontal: 5,
                maxWidth: 140,
              }}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  color: GENERAL_COLORS.textColor,
                  fontWeight: 'bold',
                  borderRadius: 8,
                }}>
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HotelEntertainment;

const styles = StyleSheet.create({});

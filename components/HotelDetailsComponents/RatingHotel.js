import {StyleSheet, Text, View} from 'react-native';
import {Rating as CustomRating} from 'react-native-ratings';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const RatingHotel = ({rating, onRatingHandle}) => {
  return (
    <View style={{marginVertical: 6, alignItems: 'flex-start'}}>
      <CustomRating
        type="star"
        ratingBackgroundColor={GENERAL_COLORS.mainBg1}
        imageSize={30}
        // ratingColor={GENERAL_COLORS.iconsBg1}
        tintColor={GENERAL_COLORS.green1}
        startingValue={rating}
        onFinishRating={value => onRatingHandle(value)}
      />
    </View>
  );
};

export default RatingHotel;

const styles = StyleSheet.create({});

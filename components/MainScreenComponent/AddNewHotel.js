import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
import {addHotel} from '../icons/icons';

const AddNewHotel = ({onPressFn}) => {
  return (
    <TouchableOpacity
      style={{width: 40, marginVertical: 1}}
      onPress={onPressFn}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: GENERAL_COLORS.iconsBg1,
            fontSize: 38,
            fontWeight: '600',
          }}>
          +
        </Text>
        {addHotel}
      </View>
    </TouchableOpacity>
  );
};

export default AddNewHotel;

const styles = StyleSheet.create({});

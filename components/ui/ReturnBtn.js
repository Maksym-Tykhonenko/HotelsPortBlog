import {StyleSheet, TouchableOpacity} from 'react-native';
import BlurContainer from './BlurContainer';
import {useNavigation} from '@react-navigation/native';
import {returnIcon} from '../icons/icons';

const ReturnBtn = () => {
  const navigation = useNavigation();

  function returnHandler() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={returnHandler}>
      <BlurContainer>{returnIcon}</BlurContainer>
    </TouchableOpacity>
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {mapIcoon} from '../icons/icons';
import BlurContainer from './BlurContainer';

const ShowMap = ({onPressFn}) => {
  return (
    <TouchableOpacity
      onPress={onPressFn}
      activeOpacity={0.6}
      style={{marginHorizontal: 10, justifyContent: 'center'}}>
      <BlurContainer>{mapIcoon}</BlurContainer>
    </TouchableOpacity>
  );
};

export default ShowMap;

const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({children, btnContainer, btnText, onPressFn}) => {
  return (
    <TouchableOpacity style={btnContainer} onPress={onPressFn}>
      <Text style={btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

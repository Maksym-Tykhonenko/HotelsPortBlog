import {Text, View, TextInput} from 'react-native';

const InputCustom = ({
  label,
  styleContainer,
  styleText,
  style,
  onChangeText,
  value,
  maxLength,
  keyboardType,
}) => {
  return (
    <View style={styleContainer}>
      <View>
        <Text style={styleText}>{label}</Text>
      </View>
      <TextInput
        autoFocus
        style={style}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        
      />
    </View>
  );
};

export default InputCustom;

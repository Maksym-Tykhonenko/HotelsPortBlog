import {StyleSheet, Text, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const DropDown = ({selected, data}) => {
  return (
    <MultipleSelectList
      setSelected={value => selected(value)}
      data={data}
      save="value"
      label="Filter by region"
      placeholder="Choose region"
      dropdownItemStyles={{color: GENERAL_COLORS.mainBg1}}
      dropdownTextStyles={{
        color: GENERAL_COLORS.mainBg2,
        fontSize: 18,
        fontWeight: 'bold',
      }}
      // dropdownStyles={{backgroundColor: '#a7c7cb'}}
      checkBoxStyles={{
        color: GENERAL_COLORS.mainBg3,
        // backgroundColor: GENERAL_COLORS.mainBg5,
      }}
      // disabledCheckBoxStyles={{
      //   backgroundColor: GeneralColors.lightOrange,
      //   color: 'pink',
      // }}
      badgeTextStyles={{color: 'black'}}
      // maxHeight={220}
      boxStyles={{borderRadius: 10,height:'auto'}}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({});

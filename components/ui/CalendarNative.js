import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const CalendarNative = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={{marginBottom: 40}}>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginVertical: 10,
          color: GENERAL_COLORS.textColor,
          fontWeight: '600',
        }}>
        Find Your Date
      </Text>
      <Calendar
        theme={{
          calendarBackground: GENERAL_COLORS.green1,
          todayBackgroundColor: GENERAL_COLORS.textColor,
          todayTextColor: GENERAL_COLORS.mainBg5,
          monthTextColor: GENERAL_COLORS.textColor,
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: 'green',
          dayTextColor: GENERAL_COLORS.textColor,
        }}
        style={{borderRadius: 20, padding: 20}}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
    </View>
  );
};

export default CalendarNative;

const styles = StyleSheet.create({});

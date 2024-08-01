import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import AddHotelsHeader from './AddHotelsHeader';
import {GENERAL_COLORS} from '../../constants/GeneralColors';
const Layout = ({children}) => {
  return (
    <>
      <AddHotelsHeader>
        <Text
          style={{
            color: GENERAL_COLORS.textColor,
            fontSize: 22,
            // fontFamily: 'PlaywriteFRModerne-Regular',
          }}>
          Create New Hotel
        </Text>
      </AddHotelsHeader>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});

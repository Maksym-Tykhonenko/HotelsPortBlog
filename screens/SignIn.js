import {Alert, StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';
import {GENERAL_COLORS} from '../constants/GeneralColors';
import {HeaderCustom, ProfileData} from '../components/SingInComponents';
import {ImagePicker, InputCustom, KeyBoardLayout} from '../components/ui';
import {
  fetchUserData,
  submitUserDataInputs,
} from '../components/utils/userData';
import SingBtn from '../components/SingInComponents/SingBtn';

const genIdFromDate = () => {
  return Date.now().toString();
};

const SignIn = ({navigation}) => {
  const [user, setUser] = useState(null);

  const [userInputs, setUserInputs] = useState({
    name: '',
    image: '',
  });

  useEffect(() => {
    async function fetch() {
      const data = await fetchUserData();
      setUser(data);
    }
    fetch();
  }, []);

  function inputsSave(identifier, newValue) {
    setUserInputs(value => {
      return {...value, [identifier]: newValue};
    });
  }
  function handleUserImage(image) {
    inputsSave('image', image);
  }
  function resetUserInputs() {
    setUserInputs({name: '', image: ''});
  }

  async function submit() {
    const submitData = {
      userId: genIdFromDate(),
      name: userInputs.name,
      image: userInputs.image,
    };
    const isValidName = userInputs.name.trim().length > 0;
    if (!isValidName) {
      Alert.alert('Oops', 'Name invalid');
      return;
    }
    try {
      await submitUserDataInputs(submitData);
      const updatedData = await fetchUserData();
      setUser(updatedData);
    } catch (error) {
      console.error('Failed to submit user data:', error);
    }
  }

  function navigateToMainManu() {
    navigation.replace('TabNavigator');
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <HeaderCustom />
      {/* <Text style={styles.welcome}>WELCOME </Text> */}
      {user ? (
        <>
          <ProfileData user={user} />
          <SingBtn
            positionStyle={{position: 'absolute', bottom: 140}}
            onPressFn={navigateToMainManu}>
            Discaver Hotels
          </SingBtn>
        </>
      ) : (
        <KeyBoardLayout>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View>
              <InputCustom
                value={userInputs.name}
                onChangeText={value => inputsSave('name', value)}
                label={'Nick Name'}
                style={styles.inputField}
                styleContainer={{marginVertical: 25}}
                styleText={{marginBottom: 5, fontSize: 16}}
              />
              <ImagePicker
                handleImage={i => handleUserImage(i)}
                style={{fontSize: 16}}
                btnStyle={[styles.inputField, {alignItems: 'center'}]}>
                Add Photo
              </ImagePicker>
            </View>
            <SingBtn
              // positionStyle={{position: 'absolute', bottom: 220}}
              positionStyle={{marginTop: 60}}
              onPressFn={submit}>
              Create User
            </SingBtn>
            <SingBtn
              // positionStyle={{position: 'absolute', bottom: 150}}
              positionStyle={{marginVertical: 20}}
              onPressFn={resetUserInputs}>
              Cancel
            </SingBtn>
          </View>
        </KeyBoardLayout>
      )}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  welcome: {
    color: GENERAL_COLORS.mainBg1,
    fontSize: 28,
    marginTop: 24,
    fontWeight: '500',
  },
  inputField: {
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    width: 300,
    borderRadius: 20,
    paddingLeft: 15,
  },
});

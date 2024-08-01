import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {useEffect, useState} from 'react';
import {CustomButton, ImagePicker, InputCustom} from '../ui';
import {handleChangeImage, handleRenameUser} from '../utils/userData';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const ProfileData = ({user}) => {
  const [nameChange, setNameChange] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [image, setImage] = useState(user.image);
  console.log('Image', image.length);

  useEffect(() => {
    async function setData() {
      // setNewName(user.name)
      setImage(user.image);
    }
    setData();
  }, []);

  function userRenameFn(text) {
    setNewName(text);
  }

  function saveNewNameHandler() {
    handleRenameUser(newName);
    setNameChange(false);
  }
  function changeImage(image) {
    setImage(image);
    handleChangeImage(image);
  }

  return (
    <View style={styles.rootContainer}>
      
        {nameChange ? (
          <View style={styles.renameContainer}>
            <InputCustom
              label={'new name'}
              styleText={styles.inputText}
              style={styles.textInput}
              value={newName}
              onChangeText={userRenameFn}
            />
            <CustomButton
              btnContainer={{alignItems: 'center', justifyContent: 'center'}}
              btnText={{paddingTop: 20}}
              onPressFn={saveNewNameHandler}>
              SAVE
            </CustomButton>
          </View>
        ) : (
          <CustomButton onPressFn={() => setNameChange(true)}>
            <Text style={styles.nameStyle}>{newName}</Text>
          </CustomButton>
        )}

        <ImagePicker handleImage={i => changeImage(i)}>
          <View
            style={{
              width: 180,
              height: 220,
              backgroundColor: GENERAL_COLORS.mainBg1 + 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {image.length === 0 ? (
              <Text>Press to choose Image</Text>
            ) : (
              <Image source={{uri: image[0]}} style={styles.image} />
            )}
          </View>
        </ImagePicker>
     
    </View>
  );
};

export default ProfileData;

const styles = StyleSheet.create({
  rootContainer: {alignItems: 'center', padding: 20},
  image: {width: '100%', height: '100%', borderRadius: 30, marginVertical: 20},
  renameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 5,
    padding: 4,
    width: 120,
  },
  inputText: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  nameStyle: {
    fontSize: 32,
    fontFamily: 'PlaywriteFRModerne-Light',
  },
});

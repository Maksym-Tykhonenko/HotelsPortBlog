import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const ImageHeader = ({children, image}) => {
  return (
    <ImageBackground
      source={{uri: image}}
      style={{
        height: 300,
        paddingBottom: 5,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
      }}>
      <SafeAreaView style={{justifyContent: 'space-between', flex: 1}}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({});

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlurContainer from '../ui/BlurContainer';

const HotelGallery = ({images}) => {
  return (
    <BlurContainer style={{paddingHorizontal: 10}} blurIntense={1}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          marginVertical: 5,
          gap: 10,
          alignItems: 'flex-end',
        }}>
        {images.map((image, index) => {
          return (
            <View key={index}>
              <Image
                source={{uri: image}}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </BlurContainer>
  );
};

export default HotelGallery;

const styles = StyleSheet.create({});

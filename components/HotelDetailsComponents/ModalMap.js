import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MapApple} from '../ui';
import {GENERAL_COLORS} from '../../constants/GeneralColors';

const ModalMap = ({longitude, latitude, isOpen, onClose}) => {
  return (
    <Modal animationType="slide" visible={isOpen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>CLOSE</Text>
          </TouchableOpacity>
          <MapApple
            longitude={longitude}
            latitude={latitude}
            containerStyle={styles.mapContainer}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalMap;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: GENERAL_COLORS.green1,
  },
  modalContent: {
    flex: 1,
    padding: 10,
  },
  closeButton: {
    // alignSelf: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: GENERAL_COLORS.textColor,
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
  },
});

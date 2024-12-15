import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const BookDetailHeader = ({ navigation, backgroundColor, book }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDownloadOption = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={[styles.headerContainer, { backgroundColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
        <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
      </TouchableOpacity>

      <View style={styles.rightButtonsContainer}>
        {/* Add to Library Button */}
        <TouchableOpacity onPress={() => {}} style={styles.headerButton}>
          <Ionicons name="bookmark-outline" size={24} color={theme.colors.text} />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity onPress={() => {}} style={styles.headerButton}>
          <Ionicons name="share-social" size={24} color={theme.colors.text} />
        </TouchableOpacity>

        {/* More Options Button */}
        <TouchableOpacity onPress={handleDownloadOption} style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Modal for Download Option */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalOption}>Download for Offline Reading</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalClose}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.medium,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 'auto',
  },
  headerButton: {
    padding: theme.spacing.small,
  },
  rightButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalOption: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  modalClose: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.main,
    marginTop: theme.spacing.small,
  },
});

export default BookDetailHeader;

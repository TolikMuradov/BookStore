import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const ReadChapterHeader = ({ navigation, onSettingsPress, isVisible }) => {
  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {
          opacity: isVisible ? 1 : 0,
          transform: [{ translateY: isVisible ? 0 : -50 }],
        },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSettingsPress} style={styles.headerButton}>
          <Ionicons name="settings" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
   
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  safeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
  },
  headerButton: {
    padding: theme.spacing.small,
  },
});

export default ReadChapterHeader;

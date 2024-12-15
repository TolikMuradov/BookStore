import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const StickyFooterBar = ({ onPreviousChapter, onNextChapter }) => {
  return (
    <View style={styles.footerContainer}>
      {/* Previous Button */}
      <TouchableOpacity style={styles.button} onPress={onPreviousChapter}>
        <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={onNextChapter}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: theme.colors.textSecondary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginHorizontal: theme.spacing.small,
  },
});

export default StickyFooterBar;

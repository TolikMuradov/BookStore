import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

const StickyFooterBar = ({ lastReadChapter }) => {
  const navigation = useNavigation();

  const handleReadPress = () => {
    navigation.navigate('ReadChapter', { chapterId: lastReadChapter });
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.leftButtonsContainer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Ionicons name="chatbox-outline" size={24} color={theme.colors.text} />
          <Text style={styles.footerText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Ionicons name="heart-outline" size={24} color={theme.colors.main} />
          <Text style={styles.footerText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Ionicons name="star-outline" size={24} color={theme.colors.text} />
          <Text style={styles.footerText}>Rate</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.readButton} onPress={handleReadPress}>
        <Text style={styles.readButtonText}>Read</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.medium,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderTopWidth: 1,
    borderTopColor: theme.colors.textSecondary,
    height: 90,
  },
  leftButtonsContainer: {
    flexDirection: 'row',
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing.medium,
  },
  footerText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
  },
  readButton: {
    backgroundColor: theme.colors.main,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.large,
    borderRadius: 10,
  },
  readButtonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.light,
    fontWeight: 'bold',
  },
});

export default StickyFooterBar;

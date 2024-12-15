import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../theme';

const MainDetail = ({ book, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
        {/* Diğer detaylar */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  backButton: {
    padding: theme.spacing.small,
  },
  backText: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  author: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textSecondary,
  },
});

export default MainDetail;

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PopularBooks = ({ books }) => {
  const navigation = useNavigation();

  const popularBooks = books
    .sort((a, b) => b.popularityScore - a.popularityScore) // Popülerlik skoruna göre sırala
    .slice(0, 10); // İlk 10 kitabı seç

  const handleBookPress = (bookId) => {
    navigation.navigate('BookDetails', { id: bookId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Books</Text>
      {popularBooks.length === 0 ? (
        <Text style={styles.emptyMessage}>No popular books found.</Text>
      ) : (
        <FlatList
          data={popularBooks}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookPress(item.id)}>
              <View style={styles.card}>
                <Image source={{ uri: item.coverImage }} style={styles.image} />
                <Text style={styles.bookTitle} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.category}>{item.category}</Text>
                  <View style={styles.rating}>
                    <Ionicons name="heart" size={13} color={theme.colors.main} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.bookAuthor}>{item.author} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
  },
  card: {
    width: 120,
    marginRight: 16,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bookTitle: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
    marginTop: 8,
  },
  bookAuthor: {
    fontSize: theme.fontSizes.extrasmall,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
  },
  bookRating: {
    marginLeft: 8,
    fontSize: theme.fontSizes.extrasmall,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: theme.fontSizes.extrasmall,
    color: theme.colors.main,
    marginLeft: 4,
    marginRight: 8,
    fontWeight: 'bold',
  },
  category: {
    fontSize: theme.fontSizes.extrasmall,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  }
});

export default PopularBooks;

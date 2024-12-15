import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppContext from '../../context/AppContext';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

const RecommendedBooks = () => {
  const { state } = useContext(AppContext);
  const navigation = useNavigation();

  // Kullanıcının favori kategorilerinden önerilen kitapları filtrele
  const favoriteCategories = state.favorites.map((book) => book.category);
  const recommendedBooks = state.books.filter(
    (book) => favoriteCategories.includes(book.category) && !state.favorites.includes(book)
  );

  // Eğer öneri yoksa varsayılan kategorilerden kitaplar seç
  const defaultCategories = ["Fantasy", "Romance"];
  const fallbackBooks = state.books.filter((book) => defaultCategories.includes(book.category));
  const booksToShow = recommendedBooks.length > 0 ? recommendedBooks : fallbackBooks;

  const handleBookPress = (bookId) => {
    navigation.navigate('BookDetails', { id: bookId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for You</Text>
      {booksToShow.length === 0 ? (
        <Text style={styles.emptyMessage}>No recommendations available.</Text>
      ) : (
        <FlatList
          data={booksToShow}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookPress(item.id)}>
              <View style={styles.card}>
                <Image source={{ uri: item.coverImage }} style={styles.image} />
                <Text style={styles.bookTitle} numberOfLines={1} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
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
    marginVertical: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  emptyMessage: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    width: 120,
    marginRight: theme.spacing.small,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
  },
  bookTitle: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
    marginTop: 8,
    marginHorizontal: 8,
  },
  category: {
    fontSize: theme.fontSizes.extrasmall,
    color: theme.colors.textSecondary,
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default RecommendedBooks;

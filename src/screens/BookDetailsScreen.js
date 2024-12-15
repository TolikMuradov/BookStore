import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import AppContext from '../context/AppContext';
import theme from '../theme';

// Components
import BookDetailHeader from '../components/BookDetailScreen/Header';
import BookStats from '../components/BookDetailScreen/BookStats';
import Description from '../components/BookDetailScreen/Description';
import StickyFooterBar from '../components/BookDetailScreen/StickyFooterBar';
import ChapterDropdown from '../components/BookDetailScreen/ChapterDropdown';

const BookDetailScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { state } = React.useContext(AppContext);

  const [headerBackground, setHeaderBackground] = useState('transparent');

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const newBackground = scrollY > 100 ? theme.colors.background : 'transparent';
    setHeaderBackground(newBackground);
  };

  const book = state.books.find((book) => book.id === id);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={{ color: theme.colors.light }}>Book not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <BookDetailHeader navigation={navigation} backgroundColor={headerBackground} />

      {/* Content with FlatList */}
      <FlatList
        data={[{ key: 'content' }]} // Sadece bir öğe içeriyor
        renderItem={() => (
          <>
            <BookStats book={book} />
            <Description description={book.description} />
            <ChapterDropdown chapters={book.chapters} />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Performant scrolling
        contentContainerStyle={styles.scrollContent}
      />

      {/* Sticky Footer */}
      <StickyFooterBar style={styles.footer} lastReadChapter={book.lastReadChapter || 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    paddingBottom: theme.spacing.large, // Add padding for smooth scrolling
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: theme.colors.background,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default BookDetailScreen;

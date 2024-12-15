import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppContext from '../context/AppContext';
import theme from '../theme';

// Components
import BookDetailHeader from '../components/BookDetailScreen/Header';
import BookStats from '../components/BookDetailScreen/BookStats';
import Description from '../components/BookDetailScreen/Description';
import StickyFooterBar from '../components/BookDetailScreen/StickyFooterBar';

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

      {/* Content with Scroll */}
      <View style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16} // Performant scrolling
        >
          <BookStats book={book} />
          <Description description={book.description} />
        </ScrollView>
      </View>

      {/* Sticky Footer */}
      <StickyFooterBar lastReadChapter={book.lastReadChapter || 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flex: 1, // Scrollable content takes up all available space
    marginBottom: 0, // Leave space for the footer
  },
  scrollContent: {
    paddingBottom: theme.spacing.large, // Add padding for smooth scrolling
  },
});

export default BookDetailScreen;

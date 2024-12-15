import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import AppContext from '../context/AppContext';
import theme from '../theme';

// Components
import ReadChapterHeader from '../components/ReadChapterScreen/Header';
import StickyFooterBar from '../components/ReadChapterScreen/Footer';

const ReadChapterScreen = ({ navigation, route }) => {
  const { chapterId, bookId } = route.params;

  const { state } = React.useContext(AppContext);

  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [scrollCounter, setScrollCounter] = useState(0); // Reklam kontrolü için

  // Kitabı ve chapter'ı bul
  const book = state.books.find((book) => book.id === bookId);
  if (!book) {
    console.error('Book not found for Book ID:', bookId);
    return <Text>Book not found!</Text>;
  }

  const chapterIndex = book.chapters.findIndex((chapter) => chapter.id === chapterId);
  if (chapterIndex === -1) {
    console.error('Chapter not found for Chapter ID:', chapterId);
    return <Text>Chapter not found!</Text>;
  }

  const chapter = book.chapters[chapterIndex];

  const toggleHeaderVisibility = () => setHeaderVisible((prev) => !prev);

  const handleNextChapter = () => {
    if (chapterIndex < book.chapters.length - 1) {
      navigation.replace('ReadChapter', {
        chapterId: book.chapters[chapterIndex + 1].id,
        bookId: book.id,
      });
    } else {
      console.log('This is the last chapter.');
    }
  };

  const handlePreviousChapter = () => {
    if (chapterIndex > 0) {
      navigation.replace('ReadChapter', {
        chapterId: book.chapters[chapterIndex - 1].id,
        bookId: book.id,
      });
    } else {
      console.log('This is the first chapter.');
    }
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 200) {
      setScrollCounter((prev) => prev + 1); // Reklam için kaydırma sayısını artır
    }
    if (scrollCounter >= 3) {
      setScrollCounter(0); // Reklam gösterimi sonrası sıfırla
      // Reklam ekranını burada gösterebilirsiniz
      console.log('Show Ad Screen');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ReadChapterHeader navigation={navigation} isVisible={isHeaderVisible} />

      {/* Content */}
      <TouchableWithoutFeedback onPress={toggleHeaderVisibility}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Text style={styles.chapterTitle}>{chapter.title}</Text>
          <Text style={styles.chapterContent}>{chapter.content}</Text>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* Footer */}
      <StickyFooterBar onNextChapter={handleNextChapter} onPreviousChapter={handlePreviousChapter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.medium,
    paddingBottom: 100,
  },
  chapterTitle: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.medium,
  },
  chapterContent: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    lineHeight: 24,
  },
});

export default ReadChapterScreen;

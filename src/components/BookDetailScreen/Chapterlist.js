import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChapterList = ({ chapters }) => {
  const navigation = useNavigation();

  const handleChapterPress = (chapterId) => {
    navigation.navigate('ReadChapter', { chapterId });
  };

  const renderChapter = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleChapterPress(item.id)}>
        <View style={styles.chapterContainer}>
          {/* Chapter Index */}
          <View style={styles.indexContainer}>
            <Text style={styles.indexText}>{index + 1}</Text>
          </View>

          {/* Chapter Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.chapterTitle} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
            <Text style={styles.publishDate}>{item.publishDate}</Text>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.statText}>{item.comments?.length || 0} Comments</Text>
              </View>

              <View style={styles.statItem}>
                <Ionicons name="eye" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.statText}>{item.views || 0} Views</Text>
              </View>
            </View>
          </View>

          {/* Free/Paid Icon */}
          <View style={styles.accessContainer}>
            {item.isFree ? (
              <Text style={styles.freeText}>Free</Text>
            ) : (
              <Ionicons name="lock-closed" size={16} color={theme.colors.main} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={chapters}
      renderItem={renderChapter}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.medium,
  },
  chapterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.small,
    marginBottom: theme.spacing.small,
    borderRadius: 8,
  },
  indexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  indexText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: theme.spacing.small,
  },
  chapterTitle: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  publishDate: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginVertical: theme.spacing.small,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: theme.spacing.small,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.medium,
  },
  statText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.small,
  },
  accessContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.main,
    fontWeight: 'bold',
  },
});

export default ChapterList;

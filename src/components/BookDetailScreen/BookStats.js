import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BookCoverStats = ({ book }) => {
  return (
    <View style={styles.container}>
      {/* Arka Plan */}
      <Image source={{ uri: book.coverImage }} style={styles.backgroundImage} blurRadius={10} />
      <View style={styles.overlay} />

      {/* Kitap Kapağı */}
      <View style={styles.coverContainer}>
        <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
      </View>

      {/* Kitap Başlığı */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{book.title}</Text>
      </View>

      {/* İstatistikler */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
            <View style={styles.yan}>
          <Ionicons name="star" size={16} color={theme.colors.textSecondary}/>
          <Text style={styles.statValue}>{book.rating}</Text>
            </View>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.sep}></View>
        <View style={styles.statItem}>
            <View style={styles.yan}>
                <Ionicons name="list-outline" size={16} color={theme.colors.textSecondary}/>
                <Text style={styles.statValue}>{book.chapters.length}</Text>
            </View>
          <Text style={styles.statLabel}>Chapters</Text>
        </View>
        <View style={styles.sep}></View>
        <View style={styles.statItem}>
            <View style={styles.yan}>
                <Ionicons name="eye" size={16} color={theme.colors.textSecondary}/>
                <Text style={styles.statValue}>{book.views}</Text>
            </View>
          <Text style={styles.statLabel}>Views</Text>
        </View>
        <View style={styles.sep}></View>
        <View style={styles.statItem}>
            <View style={styles.yan}>
                <Ionicons name="heart" size={16} color={theme.colors.textSecondary}/>
                <Text style={styles.statValue}>{book.likes}</Text>
            </View>
          <Text style={styles.statLabel}>Likes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: height * 0.63,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titleContainer: {
    position: 'absolute',
    top: height * 0.48,
    paddingHorizontal: theme.spacing.medium,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverContainer: {
    position: 'absolute',
    top: height * 0.15,
  },
  coverImage: {
    width: 180,
    height: 270,
    borderRadius: 10,
  },
  statsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: theme.spacing.medium,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    fontWeight: 'bold',
    marginStart: theme.spacing.small,
  },
  statLabel: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  sep: {
    width: 1,
    height: '100%',
    backgroundColor: theme.colors.textSecondary,
  },
  yan: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default BookCoverStats;

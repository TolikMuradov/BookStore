import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../../theme';

const Header = ({ username, profileImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  leftContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  username: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  rightContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.main,
  },
});

export default Header;

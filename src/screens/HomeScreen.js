import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background, // Arka plan için koyu renk
  },
  title: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text, // Açık metin rengi
  },
});

export default HomeScreen;

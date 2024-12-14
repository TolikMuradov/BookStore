import React, { useContext } from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import AppContext from '../context/AppContext';
import theme from '../theme';

// Components
import PopularBooks from '../components/HomeScreen/PopularBooks';
import Header from '../components/HomeScreen/Header';
import Banner from '../components/HomeScreen/Banner';

const HomeScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Header username="John Doe" profileImage="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" />
      <Banner banners={state.banners} />
      <PopularBooks books={state.books} />
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default HomeScreen;

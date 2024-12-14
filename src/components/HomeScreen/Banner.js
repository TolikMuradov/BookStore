import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme';

const { width } = Dimensions.get('window'); // Ekran genişliğini al
const AUTO_SCROLL_INTERVAL = 3000; // 3 saniyede bir geçiş

const Banner = ({ banners }) => {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBannerPress = (bookId) => {
    navigation.navigate('BookDetails', { id: bookId });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); // Sonraki banner
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval); // Temizle
  }, [banners]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width, // Mevcut index'e kaydır
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      >
        {banners.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleBannerPress(item.bookId)}>
            <Image source={{ uri: item.image }} style={styles.bannerImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.small,
  },
  bannerImage: {
    width: width - theme.spacing.medium * 2, // Ekran genişliği
    height: 150,
    borderRadius: 10,
    marginHorizontal: theme.spacing.medium,
  },
});

export default Banner;

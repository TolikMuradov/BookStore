import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { AppProvider } from './src/context/AppContext';

// Ekranları içe aktar
import HomeScreen from './src/screens/HomeScreen';
import Categories from './src/screens/CategoriesScreeen';
import AddBook from './src/screens/AddBookScreen';
import Library from './src/screens/LibraryScreen';
import Notifications from './src/screens/NotificationsScreen';
import BookDetails from './src/screens/BookDetailsScreen';
import ReadChapter from './src/screens/ReadChapterScreen';


import theme from './src/theme';
// Navigatorlar
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigator (Ana sekmeler)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'AddBook') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : '  -outline';
          }

          // Ionicons bileşenini döndür
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.tabActive, // Aktif sekme rengi
        tabBarInactiveTintColor: theme.colors.tabInactive, // Pasif sekme rengi
        tabBarStyle: { backgroundColor: theme.colors.background, borderTopWidth: 0 }, // Tab arka planı
        headerStyle: { backgroundColor: theme.colors.background }, // Header arka planı
        headerTintColor: theme.colors.text, // Header metin rengi
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="AddBook" component={AddBook} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

// Main Stack Navigator
export default function App() {
  return (
    <AppProvider>
    <StatusBar
    backgroundColor={theme.colors.background} // Durum çubuğu arka planı
    barStyle=" dark-content" // Metin ve ikonlar için açık renk
  />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="ReadChapter" component={ReadChapter} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}

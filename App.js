import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './app/navigation/rootNavigation';
import { navigationRef } from './app/navigation/navigationService';

export default function App() {
  return (
  <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
}

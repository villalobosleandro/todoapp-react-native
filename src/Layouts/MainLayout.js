import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { Header } from './../components/Header'

export const MainLayout = ({children}) => {
return(
  <SafeAreaView style={{ flex: 1, alignSelf: 'stretch'}}>
    <Header/>
    {children}
  </SafeAreaView>
)
}
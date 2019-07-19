import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import TopNav from './src/TopNav/index.js';
import Home from './src/Home/index.js';
import Bleed from './src/Bleed/index.js';

const MainNavigator = createStackNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: <TopNav title="Home"/>,
      },
     },
    Bleed: { 
      screen: Bleed,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: <TopNav title="Bleed"/>,
        headerLeft: null
      },
     },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(MainNavigator);

App = () => (
  <AppContainer
  ref={navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
)

export default App;

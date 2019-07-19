import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
        headerRight: <Text>rihgt</Text>,
        headerLeft: <Text>left</Text>,
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
        headerTitle: "Blur Bleed"
      },
     },
  },
  {
    initialRouteName: 'Bleed',
  }
);

const App = createAppContainer(MainNavigator);

export default App;

import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/Home/index.js';
import Bleed from './src/Bleed/index.js';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Bleed: { screen: Bleed },
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: 'grey',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    //   headerTitle: <Navigation />
    // },
  }
);

const App = createAppContainer(MainNavigator);

export default App;

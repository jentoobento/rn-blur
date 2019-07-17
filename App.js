import React from 'react';
import { View, Text, Image } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import styles from './styles';

const App = () => {
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{ height: 40, width: 100, backgroundColor: 'black'}}>
        <Text style={{ color: 'white'}}>Blurred Text</Text>
      </View>
      <Image resizeMode="contain" source={require('./images/park.jpg')}/>
      <BlurView blurAmount={3} style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}/>
      <View style={{ height: 40, width: 100, backgroundColor: 'white'}}>
        <Text>Unblurred Text</Text>
      </View>
    </View>
  );
};

export default App;


/**
 * issues getting blur view set up: https://github.com/react-native-community/react-native-blur/issues/249
 * err: blur view not found in UI manager
 * 
 * official doc: https://github.com/react-native-community/react-native-blur#installation
 * link manually: https://github.com/react-native-community/react-native-blur/issues/290
 * 
 * 
 * cd ios
 * pod install
 * 
 * 
 */
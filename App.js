import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import styles from './styles';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;


const App = () => {
  const [blurType, changeBlurType] = useState('light');
  const [blurAmt, increaseBlurAmt] = useState(1);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{ height: 40, width: 100, backgroundColor: 'black'}}>
        <Text style={{ color: 'white'}}>Blurred Text</Text>
      </View>
      <Image resizeMode="contain" style={{ height: 300, width: 500 }} source={require('./images/park.jpg')}/>
      <BlurView 
        blurType={blurType}
        blurAmount={blurAmt}
        style={{
          position: "absolute",
          zIndex: 1,
          top: deviceWidth / 2 + 200 / 2,
          height: 200,
          width: 200,
          borderWidth: 1,
          borderColor: 'black',
        }}/>
      <View style={{ height: 40, width: 100, backgroundColor: 'black'}}>
        <Text style={{ color: 'white'}}>Unblurred Text</Text>
      </View>
      <TouchableOpacity onPress={() => increaseBlurAmt(blurAmt + 1)} style={{ backgroundColor: 'tomato'}}>
        <Text>Increase blur</Text>
        <Text>Blur: {blurAmt}</Text>
      </TouchableOpacity>
      <Text>BlueView blurs everything above it</Text>
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
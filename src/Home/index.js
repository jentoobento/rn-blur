import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BlurView } from "@react-native-community/blur";
import Slider from '@react-native-community/slider';
import styles from './styles';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

const Home = () => {
  // const navigationOptions = {
  //   headerTitle: "Home",
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // };
  const navigationOptions = {
    title: 'Home',
  };

    const [blurType, setBlurType] = useState('light');
    const [blurAmt, setBlurAmt] = useState(1);
  
    const changeBlurType = type => {
      setBlurType(type)
      setBlurAmt(1)
    }
  
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        
          <View style={{ height: 40, width: '100%', backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10}}>
            <Text style={{ color: 'white', fontSize: 24 }}>Blur Text</Text>
            <Text style={{ color: 'white', fontSize: 24 }}>Blur Text</Text>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                height: 40,
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
            }}/>
          </View>

          <View style={{ height: 40, width: '100%', backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10}}>
            <Text style={{ fontSize: 24 }}>Blur Text</Text>
            <Text style={{ fontSize: 24 }}>Blur Text</Text>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={{
                position: "absolute",
                top: 0,
                height: 40,
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
            }}/>
          </View>

          <View>
            <Image resizeMode="contain" style={{ height: 300, width: 500 }} source={require('../../images/park.jpg')}/>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={{
                position: "absolute",
                top: 50,
                left: 150,
                height: 200,
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
              }}/>
            </View>

          <View style={styles.rowCenter}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType('light')} style={[styles.button, { backgroundColor: '#f4f4f4' }]}>
                <Text style={{ color: '#000' }}>Light</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType('xlight')} style={[styles.button, { backgroundColor: '#fff' }]}>
                <Text style={{ color: '#000'}}>Extra Light</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType('dark')} style={[styles.button, { backgroundColor: '#000' }]}>
                <Text style={{ color: '#fff'}}>Dark</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType('regular')} style={[styles.button, { backgroundColor: '#e6e6e6', width: 60,  }]}>
                <Text style={{ color: '#000'}}>Regular</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType('prominent')} style={[styles.button, { backgroundColor: '#f8ff9d', width: 70,  }]}>
                <Text style={{ color: '#000'}}>Prominent</Text>
              </TouchableOpacity>
            </View>
          </View>
    
            {blurType !== 'regular' && blurType !== 'prominent' && 
              (
                <View style={{ marginTop: 10 }}>
                  <Text>Blur Amount: {blurAmt}</Text>
                  <Slider
                    style={{ width: deviceWidth - 40, height: 40 }}
                    minimumValue={1}
                    maximumValue={20}
                    minimumTrackTintColor="#28bcec"
                    maximumTrackTintColor="#e5f4ff"
                    step={0.25}
                    onValueChange={val => setBlurAmt(val)}
                    value={blurAmt}
                  />
                </View>
              )
            }
        </View>
      </View>
    );
  };

  export default Home;
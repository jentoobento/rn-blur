import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BlurView } from "@react-native-community/blur";
import Slider from '@react-native-community/slider';
import styles from './styles';

const Home = () => {
    const [blurType, setBlurType] = useState('light');
    const [blurAmt, setBlurAmt] = useState(1);
  
    const changeBlurType = type => {
      setBlurType(type)
      setBlurAmt(1)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
        
          <View style={[styles.blurryTextContainer, { backgroundColor: 'black' }]}>
            <Text style={[styles.blurryText, { color: 'white' }]}>Blur Text</Text>
            <Text style={[styles.blurryText, { color: 'white' }]}>Blur Text</Text>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={styles.blurForBlurryText}/>
          </View>

          <View style={[styles.blurryTextContainer, { backgroundColor: 'white' }]}>
            <Text style={styles.blurryText}>Blur Text</Text>
            <Text style={styles.blurryText}>Blur Text</Text>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={styles.blurForBlurryText}/>
          </View>

          <View>
            <Image resizeMode="contain" style={styles.image} source={require('../../images/park.jpg')}/>
            <BlurView 
              blurType={blurType}
              blurAmount={blurAmt}
              style={styles.blurForImage}/>
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
                    style={styles.slider}
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

        <View style={styles.codeTextContainer}>
          <Text>
            &lt;BlurView&gt;{'\n'}
            {'  '}blurType="{blurType}"{'\n'}
            {blurType !== 'regular' && blurType !== 'prominent' && `  blurAmount={${blurAmt}}\n`}
            &lt;/BlurView&gt;
          </Text>
        </View>
        </View>
      </View>
    );
  };

  export default Home;
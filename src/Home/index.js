import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BlurView } from "@react-native-community/blur";
import BLURTYPES from '../../utils/enums';
import Slider from '@react-native-community/slider';
import styles from './styles';

const Home = () => {
    const [blurType, setBlurType] = useState(BLURTYPES.LIGHT);
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
              <TouchableOpacity onPress={() => changeBlurType(BLURTYPES.REGULAR)} 
                style={[styles.button, { backgroundColor: '#e6e6e6', width: 60, borderColor: blurType === 'regular' ? 'red' : 'black' }]}>
                <Text style={{ color: blurType === BLURTYPES.REGULAR ? 'red' : '#000'}}>Regular</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType(BLURTYPES.PROMINENT)} 
              style={[styles.button, { backgroundColor: '#f8ff9d', width: 70, borderColor: blurType === 'prominent' ? 'red' : 'black' }]}>
                <Text style={{ color: blurType === BLURTYPES.PROMINENT ? 'red' : '#000'}}>Prominent</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType(BLURTYPES.LIGHT)} 
              style={[styles.button, { backgroundColor: '#f4f4f4', borderColor: blurType === 'light' ? 'red' : 'black' }]}>
                <Text style={{ color: blurType === BLURTYPES.LIGHT ? 'red' : '#000' }}>Light</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType(BLURTYPES.XLIGHT)} 
              style={[styles.button, { backgroundColor: '#fff', borderColor: blurType === 'xlight' ? 'red' : 'black' }]}>
                <Text style={{ color: blurType === BLURTYPES.XLIGHT ? 'red' : '#000'}}>Extra Light</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => changeBlurType(BLURTYPES.DARK)} 
              style={[styles.button, { backgroundColor: '#000', borderColor: blurType === 'dark' ? 'red' : 'black' }]}>
                <Text style={{ color: blurType === BLURTYPES.DARK ? 'red' : '#fff'}}>Dark</Text>
              </TouchableOpacity>
            </View>
          </View>
    
            {blurType !== BLURTYPES.REGULAR && blurType !== BLURTYPES.PROMINENT && 
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
            {blurType !== BLURTYPES.REGULAR && blurType !== BLURTYPES.PROMINENT && `  blurAmount={${blurAmt}}\n`}
            &lt;/BlurView&gt;
          </Text>
        </View>
        </View>
      </View>
    );
  };

  export default Home;
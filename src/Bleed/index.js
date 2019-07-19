import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import Slider from '@react-native-community/slider';
import styles from './styles';

const Bleed = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../images/park.jpg')}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.rowContainer, { marginTop: 10 }]}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View style={'{{ '}border }}&gt;{'\n'}
                            {'  '}&lt;BlurView /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <View style={styles.viewWithBorder}>
                        <BlurView 
                            style={styles.viewWithBorderBlur}
                            blurType="light"
                            blurAmount={2}
                        />
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View style={'{{ '}border }}&gt;{'\n'}
                            {'  '}&lt;BlurView /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <View style={[styles.viewWithBorder, { borderRadius: 25 }]}>
                        <BlurView 
                            style={[styles.viewWithBorderBlur, { borderRadius: 18 }]}
                            blurType="light"
                            blurAmount={2}
                        />
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View style={'{{ '}border }}&gt;{'\n'}
                            {'  '}&lt;BlurView /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <View style={[styles.viewWithBorder, { borderRadius: 0 }]}>
                        <BlurView 
                            style={[styles.viewWithBorderBlur, { borderRadius: 0 }]}
                            blurType="light"
                            blurAmount={2}
                        />
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View&gt;{'\n'}
                            {'  '}&lt;BlurView{'\n'}
                            {'    '}style={'{{ '}border }} /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <BlurView 
                            style={styles.blurWithBorder}
                            blurType="light"
                            blurAmount={2}
                        />
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View&gt;{'\n'}
                            {'  '}&lt;BlurView{'\n'}
                            {'    '}style={'{{ '}border }} /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <BlurView 
                            style={[styles.blurWithBorder, { borderRadius: 25 }]}
                            blurType="light"
                            blurAmount={2}
                        />
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text>
                            &lt;View&gt;{'\n'}
                            {'  '}&lt;BlurView{'\n'}
                            {'    '}style={'{{ '}border }} /&gt;{'\n'}
                            &lt;/View&gt;
                        </Text>
                    </View>
                    <BlurView 
                            style={[styles.blurWithBorder, { borderRadius: 0 }]}
                            blurType="light"
                            blurAmount={2}
                        />
                </View>
            </ScrollView>
        </View>
    )
}

export default Bleed;
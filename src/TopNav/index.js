import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TopNav = ({ title, navigation }) => (
    <View>
        <Text>{title}</Text>
        <TouchableOpacity onPress={()=> {
            console.log('clicked');
            // this.props.navigation.navigate('Bleed')
        }}>
            <Text>click me</Text>
        </TouchableOpacity>
    </View>
)

export default TopNav;
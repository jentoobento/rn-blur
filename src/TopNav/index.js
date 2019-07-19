import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../../NavigationService';

const TopNav = ({ title }) => (
    <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={()=> NavigationService.navigate('Home')}>
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> NavigationService.navigate('Bleed')}>
            <Text>Bleed</Text>
        </TouchableOpacity>
    </View>
)

export default TopNav;
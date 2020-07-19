import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PriceScreen from '../screens/PriceScreen';
import CutInfoScreen from '../screens/CutInfoScreen';

const PriceStack = createStackNavigator();

export default () => {
    return (
        <PriceStack.Navigator>
            <PriceStack.Screen name="price" component={PriceScreen} options={{title: null, headerTransparent: true}} />
            <PriceStack.Screen name="cutinfo" component={CutInfoScreen} options={{title: null, headerTransparent: true}} />
        </PriceStack.Navigator>
    );
}
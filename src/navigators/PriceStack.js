import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PriceScreen from '../screens/PriceScreen';
import DateScreen from '../screens/DateScreen';
import HourScreen from '../screens/HourScreen';
import InfoDateScreen from '../screens/InfoDateScreen';

const PriceStack = createStackNavigator();

export default () => {
    return (
        <PriceStack.Navigator>
            <PriceStack.Screen name="price" component={PriceScreen} options={{title: null, headerTransparent: true}} />
            <PriceStack.Screen name="date" component={DateScreen} options={{title: null, headerLeft: null, headerTransparent: true}} />
            <PriceStack.Screen name="hour" component={HourScreen} options={{title: null, headerLeft: null, headerTransparent: true}} />
            <PriceStack.Screen name="infodate" component={InfoDateScreen} options={{title: null, headerLeft: null, headerTransparent: true}} />
        </PriceStack.Navigator>
    );
}
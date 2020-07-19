import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DateScreen from '../screens/DateScreen';
import TimeScreen from '../screens/TimeScreen';

const DateStack = createStackNavigator();

export default () => {
    return (
        <DateStack.Navigator>
            <DateStack.Screen name="date" compoment={DateScreen} options={{ title: null, headerTransparent: true}}/>
            <DateStack.Screen name="time" compoment={TimeScreen} options={{ title: null, headerTransparent: true}}/>
        </DateStack.Navigator>
    );
}
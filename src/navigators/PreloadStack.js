import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import AppTab from './AppTab';

const Preload = createStackNavigator();

export default () => {
    return(
        <Preload.Navigator>
            <Preload.Screen name="preload" component={PreloadScreen} options={{title: null, headerTransparent: true, headerLeft: null}}/>
            <Preload.Screen name="app" component={AppTab} options={{title: null, headerTransparent: true, headerLeft: null}}/>
        </Preload.Navigator>
    );
}
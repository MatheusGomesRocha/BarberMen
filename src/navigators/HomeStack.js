import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeTab'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Home = createStackNavigator();

export default () => {
    return(
        <Home.Navigator>
            <Home.Screen name="default" component={HomeScreen} options={{ title: null, headerTransparent: true, headerLeft: null}} />
            <Home.Screen name="login" component={LoginScreen} options={{ title: null, headerTransparent: true, headerLeft: null}} />
            <Home.Screen name="signup" component={SignUpScreen} options={{ title: null, headerTransparent: true, headerLeft: null}} />
        </Home.Navigator>
    );
}
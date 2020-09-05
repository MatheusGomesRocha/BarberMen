import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AppTab from './AppTab';
import BarberScreen from '../screens/BarberScreen';

const Preload = createStackNavigator();

export default () => {
    return(
        <Preload.Navigator
            initialRouteName="preload"
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerTintColor: '#fff',
            }}
        >
            <Preload.Screen name="preload" component={PreloadScreen} />
            <Preload.Screen name="login" component={LoginScreen} options={{HeaderLeft: null}}/>
            <Preload.Screen name="signup" component={SignUpScreen} />        
            <Preload.Screen name="apptab" component={AppTab} />        
            <Preload.Screen name="barber" component={BarberScreen} />        
        </Preload.Navigator>
    );
}
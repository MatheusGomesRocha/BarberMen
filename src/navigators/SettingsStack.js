import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsTab from '../screens/SettingsTab';

const SettingsStack = createStackNavigator();

export default () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="default" component={SettingsTab}/>
        </SettingsStack.Navigator>
    );
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';     // Tela principal de ajustes
import ProfileScreen from '../screens/ProfileScreen';       // Tela de ver perfil
import AsksScreen from '../screens/AsksScreen';             // Tela de ver perguntas frenquentes
import HelpScreen from '../screens/HelpScreen';             // Tela de ver perguntas frenquentes

const SettingsStack = createStackNavigator();

export default () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="default" component={SettingsScreen}/>
            <SettingsStack.Screen name="profile" component={ProfileScreen}/>
            <SettingsStack.Screen name="ask" component={AsksScreen}/>
            <SettingsStack.Screen name="help" component={HelpScreen}/>
        </SettingsStack.Navigator>
    );
}
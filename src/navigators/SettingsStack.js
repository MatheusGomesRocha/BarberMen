import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';     // Tela principal de ajustes
import ProfileScreen from '../screens/ProfileScreen';       // Tela de ver perfil
import EmployeesScreen from '../screens/EmployeesScreen';   // Tela de ver funcionários
import AsksScreen from '../screens/AsksScreen';             // Tela de ver perguntas frenquentes
import HelpScreen from '../screens/HelpScreen';             // Tela de ver perguntas frenquentes

const SettingsStack = createStackNavigator();

// Cor amarelo queimado FFc491
export default () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="default" component={SettingsScreen} options={{ headerLeft: null, headerTitle: null, headerTransparent: true }}/>
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{ headerLeft: null, headerTitle: null, headerTransparent: true }}/>
            <SettingsStack.Screen name="employee" component={EmployeesScreen} options={{ headerLeft: null, headerTitle: null, headerTransparent: true }}/>
            <SettingsStack.Screen name="ask" component={AsksScreen} options={{ headerLeft: null, headerTitle: null, headerTransparent: true }}/>
            <SettingsStack.Screen name="help" component={HelpScreen} options={{ headerLeft: null, headerTitle: null, headerTransparent: true }}/>
        </SettingsStack.Navigator>
    );
}
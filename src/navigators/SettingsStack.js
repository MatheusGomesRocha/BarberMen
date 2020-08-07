import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';     // Tela principal de ajustes
import ProfileScreen from '../screens/ProfileScreen';       // Tela de ver perfil
import EmployeesScreen from '../screens/EmployeesScreen';   // Tela de ver funcionários
import AsksScreen from '../screens/AsksScreen';             // Tela de ver perguntas frenquentes
import AddCutsScreen from '../screens/AddCutsScreen';
import EditCutScreen from '../screens/EditCutScreen';

const SettingsStack = createStackNavigator();

// Cor amarelo queimado FFc491
export default () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="default" component={SettingsScreen} />
            <SettingsStack.Screen name="profile" component={ProfileScreen} />
            <SettingsStack.Screen name="employee" component={EmployeesScreen} />
            <SettingsStack.Screen name="ask" component={AsksScreen} />
            <SettingsStack.Screen name="addcuts" component={AddCutsScreen} />
            <SettingsStack.Screen name="editcut" component={EditCutScreen} />
        </SettingsStack.Navigator>
    );
}
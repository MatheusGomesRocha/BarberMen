import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';     // Tela principal de ajustes
import ProfileScreen from '../screens/ProfileScreen';       // Tela de ver perfil
import EmployeesScreen from '../screens/EmployeesScreen';   // Tela de ver funcionários
import AsksScreen from '../screens/AsksScreen';             // Tela de ver perguntas frenquentes

const SettingsStack = createStackNavigator();

// Cor amarelo queimado FFc491
export default () => {
    return (
        <SettingsStack.Navigator 
            screenOptions={{ 
                headerStyle: {backgroundColor: '#fff'},
                headerTintColor: '#333',
                headerTitleAlign: 'center',
            }}>
            <SettingsStack.Screen name="default" component={SettingsScreen} options={{ title: null, headerTransparent: true}} />
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{title: 'Editar Perfil'}} />
            <SettingsStack.Screen name="employee" component={EmployeesScreen} options={{title: 'Funcionários'}} />
            <SettingsStack.Screen name="ask" component={AsksScreen} options={{title: 'Perguntas'}} />
        </SettingsStack.Navigator>
    );
}
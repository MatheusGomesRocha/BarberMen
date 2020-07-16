import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const SettingsStack = createStackNavigator();

// Cor amarelo queimado FFc491
export default () => {
    return (
        <SettingsStack.Navigator screenOptions={{ 
                headerStyle: {backgroundColor: '#fff'},
                headerTintColor: '#333',
                headerTitleAlign: 'center',
            }}>
            <SettingsStack.Screen name="default" component={SettingsScreen} options={{ title: null, headerTransparent: true}} />
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{title: 'Editar Perfil'}} />
        </SettingsStack.Navigator>
    );
}
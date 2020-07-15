import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const SettingsStack = createStackNavigator();

export default () => {
    return (
        <SettingsStack.Navigator screenOptions={{ 
                headerStyle: {backgroundColor: '#333'},
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}>
            <SettingsStack.Screen name="default" component={SettingsScreen} options={{ title: null, headerTransparent: true}} />
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{title: 'Meu Perfil'}} />
        </SettingsStack.Navigator>
    );
}
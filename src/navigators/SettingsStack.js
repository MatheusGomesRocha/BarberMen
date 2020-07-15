import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableHighlight, Text} from 'react-native';
const SettingsStack = createStackNavigator();

const Btn = styled.Button``;

export default () => {
    return (
        <SettingsStack.Navigator screenOptions={{ 
                headerStyle: {backgroundColor: '#FFc491'},
                headerTintColor: '#333',
                headerTitleAlign: 'center',
            }}>
            <SettingsStack.Screen name="default" component={SettingsScreen} options={{ title: null, headerTransparent: true}} />
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{
                title: 'Editar Perfil',
                headerRight: () => (
                    <TouchableHighlight style={{marginRight: 10}}>
                        <Text style={{fontSize: 14}}> Salvar </Text>
                    </TouchableHighlight>
                  ),
                }} />
        </SettingsStack.Navigator>
    );
}
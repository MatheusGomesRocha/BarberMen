import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import PriceScreen from '../screens/PriceTab'
import DateScreen from '../screens/DateTab'
import SettingsStack from './SettingsStack';

const AppTab = createBottomTabNavigator();

// Cor amarelo queimado FFc491

export default () => {
    return (
        <AppTab.Navigator
        tabBarOptions={{ 
            showIcon: true,     // Mostrar os icons
            showLabel: true,    // Mostrar o Label
            activeTintColor: '#fff',    // Cor quando a tab estiver "focada"
            inactiveTintColor: '#999',  // Cor quando não estiver "focada"
            style: {    // Estilo da TabBar
                height: 70,
                padding: 8,
                backgroundColor: '#333',
            },
            labelStyle: {   // Estilo do Label
                fontSize: 16,
                paddingBottom: 5
            },
            keyboardHidesTabBar: true
        }}

        screenOptions={({route}) =>({           // Passando route como objeto para pegar o nome das rotas futuramente
            tabBarIcon: ({ focused }) => {      // Adicionando Icons dinamicamente
                let icon = null;
                switch(route.name) {
                    case 'home':
                        icon = "home";
                    break;
                    case 'cut':
                        icon = "cut";
                    break;
                    case 'date':
                        icon = "calendar";
                    break;
                    case 'settings':
                        icon = "cog";
                    break;
                }
                
                // name no Icon irá receber a variável para ser adicionado dinamicamente
                // Se a Tab estiver focado, irá receber a cor Preta ´para dar um destaque a mais dos outros 
                return <Icon name={icon} size={25} style={{ color: focused ? '#fff' : '#999'}}/>
            }
        })} 
        >
            <AppTab.Screen name="home" component={HomeStack} options={{ tabBarLabel: 'Início'}}/>
            <AppTab.Screen name="cut" component={PriceScreen} options={{ tabBarLabel: 'Cortes'}}/>
            <AppTab.Screen name="date" component={DateScreen} options={{ tabBarLabel: 'Calendário'}}/>
            <AppTab.Screen name="settings" component={SettingsStack} options={{ tabBarLabel: 'Ajustes'}}/>
        </AppTab.Navigator>
    );
}
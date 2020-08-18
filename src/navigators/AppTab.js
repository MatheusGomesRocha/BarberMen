import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import PriceStack from './PriceStack';
import SettingsStack from './SettingsStack';
import FavoritesScreen from '../screens/FavoritesScreen';
import ManageCutScreen from '../screens/ManageCutScreen';
import AddCutScreen from '../screens/AddCutScreen';

import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AppTab = createBottomTabNavigator();

// Cor amarelo queimado FFc491

export default () => {
    const user = useSelector(state => state.user.email);
    const [isAdmin, setIsAdmin] = useState(false)

    const userInfo = auth().currentUser;    // Pegando usuário logado

    if(user) {      // Função que verifica se existe algum usuario, e se ele é admin
        firestore()
        .collection('users')
        .where('id', '==', userInfo.uid)
        .get()
        .then(querySnapshot => {    
            querySnapshot.forEach(documentSnapshot => {
                setIsAdmin(documentSnapshot.data().admin)
            });
        });
    }

    return (
        <AppTab.Navigator
        tabBarOptions={{ 
            showIcon: true,     // Mostrar os icons
            showLabel: true,    // Mostrar o Label
            activeTintColor: '#E76F51',    // Cor quando a tab estiver "focada"
            inactiveTintColor: '#E76F5170',  // Cor quando não estiver "focada"
            style: {    // Estilo da TabBar
                height: 70,
                padding: 8,
                backgroundColor: '#ffffff',
                borderTopColor: '#E76F51',
                borderTopWidth: 1
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
                    case 'manage':
                        icon = 'tasks';
                    break;
                    case 'addcut':
                        icon = 'plus';
                    break;
                    case 'favorites':
                        if(focused) {
                            icon = "heart";
                        } else {
                            icon = "heart-o";
                        }
                    break;
                    case 'settings':
                        icon = "cog";
                    break;
                }
                
                // name no Icon irá receber a variável para ser adicionado dinamicamente
                // Se a Tab estiver focado, irá receber a cor Preta ´para dar um destaque a mais dos outros 
                return <Icon name={icon} size={25} style={{ color: focused ? '#E76F51' : '#E76F5170'}}/>
            }
        })} 
        >
            <AppTab.Screen name="home" component={HomeStack} options={{ tabBarLabel: 'Início'}}/>
            {isAdmin?
                <AppTab.Screen name="manage" component={ManageCutScreen} options={{ tabBarLabel: 'Gerenciar'}}/>
                :<AppTab.Screen name="cut" component={PriceStack} options={{ tabBarLabel: 'Cortes'}}/>
            }
            {isAdmin?
                <AppTab.Screen name="addcut" component={AddCutScreen} options={{ tabBarLabel: 'Adicionar'}}/>
                :<AppTab.Screen name="favorites" component={FavoritesScreen} options={{ tabBarLabel: 'Favoritos'}}/>
            }    
            <AppTab.Screen name="settings" component={SettingsStack} options={{ tabBarLabel: 'Ajustes'}}/>
        </AppTab.Navigator>
    );
}
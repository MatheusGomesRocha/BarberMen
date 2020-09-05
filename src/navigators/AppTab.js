import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SettingsStack from './SettingsStack';

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
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOption={{
            keyboardHidesTabBar: true
        }}
        >
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="search" component={SearchScreen} />
            <AppTab.Screen name="appointments" component={AppointmentsScreen} />
            <AppTab.Screen name="favorites" component={FavoriteScreen} />
            <AppTab.Screen name="settings" component={SettingsStack} />
        </AppTab.Navigator>
    );
}
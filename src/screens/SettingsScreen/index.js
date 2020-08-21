import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect, useSelector } from 'react-redux'
import { Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgPic from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { StatusBar } from 'react-native';
import {
    Container,  // View toda a tela

    Scroll,     // View que realiza scroll

    UserView,       // View com foto do usuário
    Texto,          // Texto abaixo da foto do usuário
    
    SettingsView,   // View com todos os buttons
    SettingsButton, // Button
    DefaultText,    // Texto padrão com os nomes
} from './style';

function SettingsScreen(props) {    
    const navigation = useNavigation();
    const user = useSelector(state => state.user.email);
    let userSplit = user.split('@')[0];     // Quebrando email para pegar o nome antes do @
    const [isAdmin, setIsAdmin] = useState(false)

    const userInfo = auth().currentUser;    // Pegando usuário logado

    function test() {
        alert('hello world');
    }


    function SignOut() {    // Função de Logout
        props.SignOut();
        auth().signOut();
        navigation.reset({
            index: 0,
            routes: [
                { name: 'home' },
            ]
        });
    }

    function toggleSwitch () {  // Função que troca de Dark Mode para Light Mode
        setIsEnabled(!isEnabled);
    }

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
       

    let bg = '#fff';        // Função para mudar cor com Dark Mode
    let color = "#333";
    


    return (
        <Container bgColor={bg}>
            <Scroll>

                <UserView> 
                    <SvgPic width={70} height={70}/>
                    {!user?
                    <Texto> Faça o login </Texto> 
                    : <Texto> Bem vindo {userSplit} </Texto> }
                </UserView>

                <SettingsView>
                    <>
                        
                        {/* Aparecer apenas se estiver logado */}
                        {user?
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('profile')}>
                            <>
                                <DefaultText color={color}> Editar perfil </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>
                        :null}
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('employee')}>
                            <>
                                <DefaultText color={color}> Funcionários </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>
                        
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('ask')}>
                            <>
                                <DefaultText color={color}> Perguntas frequentes </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText color={color}> Localização </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText color={color}> Cupom de desconto </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('help')}>
                            <>
                                <DefaultText color={color}> Ajuda </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>


                        <SettingsButton underlayColor="transparent" onPress={() => alert('(85) 994264687\n\nMatheus Gomes')}>
                            <>
                                <DefaultText color={color}> Contato do desenvolvedor </DefaultText> 
                                <Icon name="angle-right" size={30} color={color}/>
                            </>
                        </SettingsButton>

                        {user?
                            <SettingsButton underlayColor="transparent" onPress={SignOut}>
                                <>
                                    <DefaultText color={color}> Sair </DefaultText> 
                                    <Icon name="angle-right" size={30} color={color}/>
                                </>
                            </SettingsButton>
                        : null}
                    </>
                </SettingsView>
            </Scroll>

        </Container>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDark:(dark)=>dispatch({type: 'SET_DARK', payload: {dark}}),
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),
    };
}

export default connect(null, mapDispatchToProps) (SettingsScreen);
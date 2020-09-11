import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
    const [isAdmin, setIsAdmin] = useState(false)

    const userInfo = auth().currentUser;    // Pegando usuário logado

    let userSplit = userInfo.email.split('@')[0];     // Quebrando email para pegar o nome antes do @

    function test() {
        alert('hello world');
    }


    function SignOut() {    // Função de Logout
        props.SignOut();
        auth().signOut();
        navigation.reset({
            index: 0,
            routes: [
                { name: 'preload' },
            ]
        });
    }

   
    return (
        <Container>
            <Scroll>

                <UserView> 
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
                                    <DefaultText> Editar perfil </DefaultText> 
                                    <Icon name="angle-right" size={30} color="#fff"/>
                                </>
                            </SettingsButton>
                        :null}
                        
                        {/* <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('ask')}>
                            <>
                                <DefaultText> Perguntas frequentes </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff"/>
                            </>
                        </SettingsButton>

                        {/* <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Localização </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff"/>
                            </>
                        </SettingsButton> 

                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('help')}>
                            <>
                                <DefaultText> Ajuda </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff"/>
                            </>
                        </SettingsButton> */}


                        <SettingsButton underlayColor="transparent" onPress={() => alert('(85) 994264687\n\nMatheus Gomes')}>
                            <>
                                <DefaultText> Contato do desenvolvedor </DefaultText> 
                                <Icon name="angle-right" size={30} color="#fff"/>
                            </>
                        </SettingsButton>

                        {user?
                            <SettingsButton underlayColor="transparent" onPress={SignOut}>
                                <>
                                    <DefaultText> Sair </DefaultText> 
                                    <Icon name="angle-right" size={30} color="#fff"/>
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
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // Log Out
    };
}

export default connect(null, mapDispatchToProps) (SettingsScreen);
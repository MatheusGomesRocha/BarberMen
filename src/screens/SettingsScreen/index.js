import React, {useState, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect, useSelector } from 'react-redux'
import { Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgPic from '../../assets/svg/undraw_profile_pic_ic5t.svg';
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
    EnabledText,    // Texto de ON OFF no Switch
} from './style';

function SettingsScreen(props) {
    const navigation = useNavigation();

    const user = useSelector(state => state.user.email);
    let userSplit = user.split('@')[0];

    const [isAdmin, setIsAdmin] = useState(false)
    
    const userInfo = auth().currentUser;

    function test() {
        alert('hello world');
    }

    function SignOut() {
        props.SignOut();
        auth().signOut();
        navigation.reset({
            index: 0,
            routes: [
                { name: 'home' },
            ]
        });
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

        if(user) {
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
        <Container>
            <Scroll>

                <UserView> 
                    <SvgPic width={70} height={70}/>
                    {!user?
                    <Texto> Faça o login  </Texto> 
                    : <Texto> Olá {userSplit} </Texto> }
                </UserView>

                <SettingsView>
                    <>
                        <SettingsButton underlayColor="transparent">
                            <>
                                <DefaultText width="75%"> Dark Mode </DefaultText> 
                                { isEnabled ? ( <EnabledText> On </EnabledText>) : ( <EnabledText> Off </EnabledText>)}
                                <Switch
                                trackColor={{ false: "#bbb", true: "#333" }}
                                thumbColor={isEnabled ? "#fff" : "#fff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </>
                        </SettingsButton>

                        {isAdmin?
                            <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('addcuts')}>
                                <>
                                    <DefaultText> Adiconar novos cortes </DefaultText> 
                                    <Icon name="angle-right" size={30} />
                                </>
                            </SettingsButton>
                        :null}
                        
                        {/* Aparecer apenas se estiver logado */}
                        {user?
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('profile')}>
                            <>
                                <DefaultText> Editar perfil </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>
                        :null}
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('employee')}>
                            <>
                                <DefaultText> Funcionários </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>
                        
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('ask')}>
                            <>
                                <DefaultText> Perguntas frequentes </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Histórico </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>


                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Localização </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Cupom de desconto </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Contato do desenvolvedor </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        {user?
                            <SettingsButton underlayColor="transparent" onPress={SignOut}>
                                <>
                                    <DefaultText> Sair </DefaultText> 
                                    <Icon name="angle-right" size={30} />
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
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'})
    };
}

export default connect(null, mapDispatchToProps) (SettingsScreen);
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgPic from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import auth from '@react-native-firebase/auth';

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

export default () => {
    const navigation = useNavigation();
    const user = auth().currentUser;

    function test() {
        alert('hello world');
    }

    function SignOut() {
        auth().signOut();
        navigation.navigate('home');
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <Container>
            <Scroll>

                <UserView> 
                    <SvgPic width={70} height={70}/>
                    <Texto> Faça o login </Texto> 
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

                        {/* Aparecer apenas se estiver logado */}
                        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('profile')}>
                            <>
                                <DefaultText> Editar perfil </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

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
                                <DefaultText> Cortes favoritos </DefaultText> 
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
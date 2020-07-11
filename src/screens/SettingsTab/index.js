import React from 'react';
import {
    Container,
    Scroll,
    Texto,
    UserView,
    SettingsView,
    SettingsButton,
    DefaultText,
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
    function test() {
        alert("Hello World");
    }

    return (
        <Container>
            <Scroll>
                <UserView> 
                    <Icon name="user-circle" size={70} style={{marginTop: 35, color: '#fff'}} />
                    <Texto> Faça o login </Texto> 
                </UserView>
                <SettingsView>
                    <>
                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="user" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Login </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        {/* Aparecer apenas se estiver logado */}
                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="user" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Meu perfil </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="users" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Funcionários </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>
                        
                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="comment" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Perguntas frequentes </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="clock-o" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Histórico </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="heart" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Cortes favoritos </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="map-marker" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Localização </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="clock-o" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Cupom de desconto </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="phone" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Contato do desenvolvedor </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="#ddd" onPress={test}>
                            <>
                                <Icon name="power-off" size={20} style={{marginLeft: 15, width: 20}}/>
                                <DefaultText> Sair </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>
                    </>
                </SettingsView>
            </Scroll>
        </Container>
    );
}
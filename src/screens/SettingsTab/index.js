import React from 'react';
import {
    Container,
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
            <UserView> 
                <Icon name="user-circle" size={70} style={{marginTop: 20, color: '#fff'}} />
                <Texto> Faça o login </Texto> 
            </UserView>
            <SettingsView>
                <SettingsButton underlayColor="#ccc" onPress={test}>
                    <>
                        <DefaultText> Meu perfil </DefaultText> 
                        <Icon name="angle-right" size={30} />
                    </>
                </SettingsButton>
            </SettingsView>
        </Container>
    );
}
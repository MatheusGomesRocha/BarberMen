import React, {useState} from 'react';
import {
    Container,

    Scroll,

    SvgView,

    Texto,
    UserView,
    SettingsView,
    SettingsButton,
    DefaultText,
    EnabledText,
} from './style';

import { Switch } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Svg from '../../assets/svg/undraw_profile_details_f8b7.svg';
import SvgPic from '../../assets/svg/undraw_profile_pic_ic5t.svg';

export default () => {
    function test() {
        alert("Hello World");
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

                    
                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Login </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        {/* Aparecer apenas se estiver logado */}
                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Meu perfil </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
                                <DefaultText> Funcionários </DefaultText> 
                                <Icon name="angle-right" size={30} />
                            </>
                        </SettingsButton>
                        
                        <SettingsButton underlayColor="transparent" onPress={test}>
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

                        <SettingsButton underlayColor="transparent" onPress={test}>
                            <>
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
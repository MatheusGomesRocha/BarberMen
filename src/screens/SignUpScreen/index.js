import React from 'react';
import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Cadastro 
    BigText,    // Texto Cadastro grande

    ViewSignUp,  // View com o form de cadastro

    Scroll,     // Só irá realizar scroll dentro dessa view acima

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar cadastro
    BtnText,    // Texto do Button e Forgot
} from './style';

import { useNavigation } from '@react-navigation/native';
import {BackHandler} from 'react-native';
import { StackActions } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Cadastro </BigText>
            </TextView>
            
            <ViewSignUp>
                <Scroll>

                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Email"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Senha"/>
                    </InputView>

                    <BtnView>
                        <BtnComponent width="80%" radius="100px" height="55px" bgColor="#fff">
                            <BtnText> Finalizar </BtnText>
                        </BtnComponent>
                        <BtnText style={{color:"#fff", marginTop:20}}> Esqueceu a senha? </BtnText>

                    </BtnView>

                </Scroll>
            </ViewSignUp>
        </Container>
    );
}
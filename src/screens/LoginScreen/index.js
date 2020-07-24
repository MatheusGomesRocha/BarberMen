import React from 'react';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';

import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Login 
    BigText,    // Texto Login grande

    ViewLogin,  // View com o form de login

    Scroll,     // Só irá realizar scroll dentro dessa view acima

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar login
    BtnText,    // Texto do Button e Forgot
} from './style';

export default () => {
    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Login </BigText>
            </TextView>
            
            <ViewLogin>
                <Scroll>
                    <InputView>
                        <Input keyboardType="email-address" underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Email"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Senha"/>
                    </InputView>

                    <BtnView>
                        <BtnComponent width="80%" radius="100px" height="55px" bgColor="#fff">
                            <BtnText> Login </BtnText>
                        </BtnComponent>
                        <BtnText style={{color:"#fff", marginTop:20, marginBottom: 25}}> Esqueceu a senha? </BtnText>

                    </BtnView>

                </Scroll>
            </ViewLogin>
        </Container>
    );
}
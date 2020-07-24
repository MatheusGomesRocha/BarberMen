import React from 'react';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';

import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Cadastro 
    BigText,    // Texto Cadastro grande

    ViewSignUp,  // View com o form de cadastro

    Scroll,     // Só irá realizar scroll dentro dessa view acima

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar cadastro
    BtnText,    // Texto do Button e Arraste
} from './style';

export default () => {
    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Cadastro </BigText>
            </TextView>
            
            <ViewSignUp>
                <BtnText style={{color: '#fff', textAlign: 'center', marginTop: 5}}> Arraste para cima </BtnText> 

                <Scroll>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Nome"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Email" keyboardType="email-address"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="CPF" keyboardType="numeric"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Contato" keyboardType="numeric"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Senha" />
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Confirme a Senha"/>
                    </InputView>

                    <BtnView>
                        <BtnComponent width="80%" radius="100px" height="55px" bgColor="#fff">
                            <BtnText> Finalizar </BtnText>
                        </BtnComponent>
                    </BtnView>

                </Scroll>
            </ViewSignUp>
        </Container>
    );
}
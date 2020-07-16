import React from 'react';
import {
    Container,

    ViewLogin,
    Scroll,

    TextView,
    BigText,

    InputView,
    Input,
    
    BtnView,
    BtnText,
} from './style';

import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
export default () => {
    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> LOGIN </BigText>
            </TextView>
            
            <ViewLogin>
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
            </ViewLogin>
        </Container>
    );
}
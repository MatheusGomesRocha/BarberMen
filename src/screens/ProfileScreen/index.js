import React from 'react';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import BtnComponent from '../../components/BtnComponent';

import {
    Container,      // View toda a tela
    
    Scroll,         // View que realiza o Scroll

    PicView,        // View de profile picture
    Texto,          // Texto do Button para trocar a foto

    InputView,      // View do Input
    InputText,      // Label do input
    Input,          // O input

    BtnView,        // View do Button de salvar
    BtnText         // Texto do Button de salvar
} from './style';


export default () => {
    return (
        <Container>                
                <Scroll>

                    <PicView>
                        <Svg width={100} height={100} />
                        <BtnComponent bgColor="#333" width="50%" height="40px" mTop="20px" radius="20px">
                            <Texto> Editar imagem </Texto>
                        </BtnComponent>
                    </PicView>

                    <InputView>
                        <InputText> Nome </InputText>
                        <Input underlineColorAndroid="#333" placeholderTextColor="rgba(0, 0, 0, 0.4)" placeholder="Matheus Gomes" />
                    </InputView>
                    <InputView>
                        <InputText> Email </InputText>
                        <Input underlineColorAndroid="#333" placeholderTextColor="rgba(0, 0, 0, 0.4)" placeholder="matheusgomes192@hotmail.com" />
                    </InputView>
                    <InputView>
                        <InputText> Senha </InputText>
                        <Input underlineColorAndroid="#333" placeholderTextColor="rgba(0, 0, 0, 0.4)" placeholder="****" />
                    </InputView>
                
                    <BtnView>
                        <BtnComponent width="80%" radius="100px" height="50px" bgColor="#333">
                            <BtnText> Salvar </BtnText> 
                        </BtnComponent>
                    </BtnView>

                </Scroll>
        </Container>
    );
}
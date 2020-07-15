import React from 'react';
import {
    Container,
    Scroll,
    Texto,
    PicView,
    InputView,
    InputText,
    Input,
} from './style';

import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import BtnComponent from '../../components/BtnComponent';

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
                    <Input placeholder="Matheus Gomes" />
                </InputView>

                <InputView>
                    <InputText> Email </InputText>
                    <Input placeholder="matheusgomes192@hotmail.com" />
                </InputView>

                <InputView>
                    <InputText> Senha </InputText>
                    <Input placeholder="****" />
                </InputView>

            </Scroll>
        </Container>
    );
}
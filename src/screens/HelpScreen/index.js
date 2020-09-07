import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';

import {
    Container,  // Tela

    Scroll,     // Permite a rolagem da tela

    InputView,  // View que fica os Inputs
    LabelText,  // Texto
    Input,      // Input

    BtnText,    // Texto do BtnComponent
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>

            <Scroll>

                <Header>
                    <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                        <HeaderLeft>  <Icon name="angle-left" size={22} /> Ajuda </HeaderLeft>
                    </HeaderButton>
                </Header>

                <SmallText color="#434343">  Tem alguma dúvida ou reclamação? Nos mande uma mensagem, seu feedback é importante para nós </SmallText>

                <InputView>
                    <LabelText> Título da mensagem </LabelText>
                    <Input placeholder="Use palavras-chave" />

                    <LabelText style={{marginTop: 40}}> Mensagem... </LabelText>
                    <Input  style={{height: 150, textAlign: 'center'}} placeholder="Mensagem" />

                    <BtnComponent mTop="50px" bgColor="#E76F51" height="60px" width="100%" radius="100px">
                        <BtnText> Enviar </BtnText> 
                    </BtnComponent>
                </InputView>

                
            </Scroll>
            
        </Container>
    );
}
import React from 'react';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import {
    Header,
    HeaderLeft,
    HeaderButton,
} from '../../components/HeaderComponent';

import {
    Container,      // View toda a tela

    Scroll,         // View de Scroll

    AskView,        // View todas as perguntas
    AskItem,        // View uma pergunta
    AskText,        // Texto de pergunta
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>

            <Header>
                <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                    <HeaderLeft>  <Icon name="angle-left" size={22} /> Perguntas </HeaderLeft>
                </HeaderButton>
            </Header>

            <Scroll>

                <AskView>
                
                    <AskItem>
                        <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                            <AskText> Como ganho desconto? </AskText>
                        </BtnComponent>
                    </AskItem>   

                    <AskItem>
                        <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                            <AskText> Onde fica a barbearia? </AskText>
                        </BtnComponent>
                    </AskItem>  

                    <AskItem>
                        <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                            <AskText> Quais tipos de pagamentos aceitam? </AskText>
                        </BtnComponent>
                    </AskItem>  

                    <AskItem>
                        <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                            <AskText> Tem área de lazer? </AskText>
                        </BtnComponent>
                    </AskItem>  

                    <AskItem>
                    <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                        <AskText> Recebem pagamento pelo App? </AskText>
                    </BtnComponent>
                    </AskItem>  

                    <AskItem>
                    <BtnComponent underlayColor="transparent" bgColor="transparent" width="100%" >
                        <AskText> Vendem produtos de barbearia?</AskText>
                    </BtnComponent>
                    </AskItem>  

                </AskView>

            </Scroll>
        </Container>
    );
}

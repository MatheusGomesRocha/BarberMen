import React from 'react';
import BtnComponent from '../../components/BtnComponent';

import {
    Container,      // View toda a tela

    Scroll,         // View de Scroll

    AskView,        // View todas as perguntas
    AskItem,        // View uma pergunta
    AskText,        // Texto de pergunta
} from './style';

export default () => {

    return(
        <Container>
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

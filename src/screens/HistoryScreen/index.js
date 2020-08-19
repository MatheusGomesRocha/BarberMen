import React from 'react';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
    Teste
} from '../../components/HeaderComponent';

import {
    Container,

    Scroll,

    HistoryView,
    ItemView,
    LeftView,
    RightView,
    DefaultText,

} from './style';

let history = [
    {id: 1, serviço: 'platinar', date: '20/08/2020', barber: 'Mourão', price: '25,00'},
    {id: 2, serviço: 'platinar', date: '20/08/2020', barber: 'Mourão', price: '25,00'},
    {id: 3, serviço: 'platinar', date: '20/08/2020', barber: 'Mourão', price: '25,00'},
    {id: 4, serviço: 'platinar', date: '20/08/2020', barber: 'Mourão', price: '25,00'},
    {id: 5, serviço: 'platinar', date: '20/08/2020', barber: 'Mourão', price: '25,00'},
]

export default () => {
    return(
        <Container>

            

            <Scroll>
            <Header height="60px" justify="center">
                <HeaderLeft> Histórico </HeaderLeft>
            </Header>
            <HistoryView>
                {history.map((h, k) => (
                    <ItemView key={k}>
                        <LeftView>
                            <DefaultText>{h.serviço}</DefaultText>
                            <DefaultText>{h.date}</DefaultText>
                            <DefaultText>{h.barber}</DefaultText>
                        </LeftView>
                        <RightView>
                            <DefaultText>{h.price}</DefaultText>
                        </RightView>
                    </ItemView>
                ))}
            </HistoryView>

            </Scroll>

            {/* <DefaultText>
                Você ainda não realizou nenhum agendamento
            </DefaultText> */}
        </Container>
    );
}
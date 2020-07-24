import React from 'react';
import { useSelector } from 'react-redux';
import BtnComponent from '../../components/BtnComponent';

import { 
    Container,

    TextView,
    BigText,
    SmallText,

    InfoView,
    InfoText,
    BtnText,
} from './style';

export default () => {
    const cutName = useSelector(state=> state.user.cut);
    const month = useSelector(state=> state.user.month);
    const day = useSelector(state=> state.user.day);
    const hour = useSelector(state => state.user.hour);
    const duration = useSelector(state => state.user.duration);

    return (
        <Container>
            <TextView>
                <BigText> Finalize e marque seu atendimento </BigText>
                <SmallText> Aqui contém tudo que você escolheu, revise para ver se está tudo correto, se estiver, finalize e aguarde para ser atendido</SmallText> 
            </TextView>
            <InfoView>
                <InfoText> Corte: {cutName} </InfoText>
                <InfoText> Data: {day}/{month} </InfoText>
                <InfoText> Horário: {hour} </InfoText>
                <InfoText> Duração: {duration} </InfoText>
            </InfoView>

            <BtnComponent width="90%" bgColor="#333" radius="100px" style={{marginTop: 50}}>
                <BtnText>Finalizar</BtnText> 
            </BtnComponent>
            
        </Container>
    );
}
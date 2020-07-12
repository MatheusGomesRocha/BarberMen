import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DayScroll = styled.ScrollView`
    width: 100%;
    height: 50px;
`;

const DayButton = styled.TouchableHighlight`
    width: ${props=>props.width};
    align-items: center;
    justify-content: center;
`;

const Item = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 35px;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text``;



const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 9 para mostrar 9 buttons centralizados 
let dayWPx = Math.round(screenSize / 9) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho
let dayW = Math.round(screenSize / 9);        // Usar para o snapToInterval
let offsetW = Math.round((screenSize - dayW) / 2);

function Day ({month, day}) {      // função que pega se o dia que o usuário selecionou/dias normais é menor, maior ou igual ao dia atual
    return (
        <DayButton width={dayWPx} underlayColor="transparent">
            <Item>
                <Texto> {day} </Texto>
            </Item>
        </DayButton>
    );
}

export default (props) => {
    const dayRef = useRef();  // Pega referência do dia
    const [selectDay, setSelectDay] = useState(props.selectDay);

    function handleScrollEnd(e) {   
        let posX = e.nativeEvent.contentOffset.x;       // Pegando o valor X horizontal do Scroll
        let targetDay = Math.round( posX / dayW + 1);     
        setSelectDay(targetDay); 
    }

    function scrollToDay(d) {     // Função que realiza o Scroll para o dia selecionado
        let posX = (d - 1) * dayW;
        dayRef.current.scrollTo({x:posX, y:0, animated:true});
    }

    useEffect(() => {
        props.setSelectDay(selectDay);
    }, [selectDay]);

    // useEffect(() => {       // Da um Timeout de 10 milisegundos para realizar o scroll para o dia atual
    //     setTimeout(() => {
    //         if(props.selectMonth == new Date().getMonth()) {    // Se o mês selecionado for o mês atual, um scroll é realizado até o dia atual
    //             scrollToDay(new Date().getDate());
    //         } else {        // Se não for o mês atual, o scroll é realizado para o dia 1
    //             scrollToDay(1);
    //         }
    //     }, 10);
    // }, [props.selectMonth]);

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectMonth+1), 0).getDate();   // Pegando quantos dias tem em um mês (passando o 0 como dia quer dizer que você vai pegar o último dia do mês anterior e assim sabendo quantos dias tem)
    
    for(let i=1;i<=daysInMonth;i++) {       // O array se adaptará à quantos dias tem no mês
        days.push(i);
    }

    return (
        <DayScroll 
        ref={dayRef}      // Seta o Ref
        snapToInterval={dayW}     // Sempre deixar um Button no meio
        contentContainerStyle={{paddingLeft: offsetW, paddingRight: offsetW}}     // Adicionando um item invisível para 1 e 31 ficarem no meio
        onMomentumScrollEnd={handleScrollEnd}
        >
            {days.map((d, k) => (     // Mapenado os meses "m" e uma Key para o Button "k"
                <Day 
                    key={k}
                    day={d}
                    month={props.selectMonth}
                />
            ))}
        </DayScroll>
    );
}
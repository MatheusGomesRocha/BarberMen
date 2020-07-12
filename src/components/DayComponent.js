import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DayScroll = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;

const DayButton = styled.TouchableHighlight`
    width: ${props=>props.width};
    align-items: center;
    justify-content: center;
    padding-bottom: 25px;
`;

const Item = styled.View`
    background-color: ${props=>props.bgColor};
    width: 40px;
    height: 40px;
    border-radius: 35px;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text``;



const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 9 para mostrar 9 buttons centralizados 
let dayWPx = Math.round(screenSize / 7) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho
let dayW = Math.round(screenSize / 7);        // Usar para o snapToInterval
let offsetW = Math.round((screenSize - dayW) / 2);

function Day ({month, day}) {      // função que pega se o dia que o usuário selecionou/dias normais é menor, maior ou igual ao dia atual
    const [choseDay, setChoseDay] = useState(false);
    let bgColor= '#ddd';

    let today = new Date();
    today.setHours(0);      // zera a hora
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day)    

   

    function setDay(d) {
        setChoseDay(!choseDay);
    }

    if (choseDay) {
        bgColor = '#00ff7f';
    }

    if(thisDate.getTime() == today.getTime()) {
        bgColor = '#b5eeff';
    }

    return (
        <DayButton width={dayWPx} underlayColor="transparent" onPress={() => setDay(day)}>
            <Item bgColor={bgColor}>
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
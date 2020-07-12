import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView`
    width: 100%;
    height: 60px;
`;

const MonthView = styled.TouchableHighlight`
    width: ${props=>props.width};
    align-items: center;
    margin-top: 50px;
`;

const Item = styled.View`
    width: 80%;
    height: 60px;
    background-color: #ccc;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text`
    color: #fff;
    font-size: 24px;
`;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 3 para mostrar 3 buttons centralizados 
let size = screenSize + "px";   // Usar para passar a prop de tamanho do MonthButton pois precisa dizer a forma de medição de tamanho
let thirdS = screenSize;        // Usar para o snapToInterval

export default (props) => {
    const navigation = useNavigation();
    const monthRef = useRef();  // Pega referência do mês
    const [selectMonth, setSelectMonth] = useState(props.selectMonth);


    function handleScrollEnd(e) {   
        let posX = e.nativeEvent.contentOffset.x;       // Pegando o valor X horizontal do Scroll
        let targetMonth = Math.round( posX / thirdS );     
        setSelectMonth(targetMonth);
    }

    function scrollToMonth(m) {     // Função que realiza o Scroll para o mês selecionado
        let posX = m * thirdS;
        monthRef.current.scrollTo({x: posX, y:0, animated: true})
    }

    let Month = new Date().getMonth();

    useEffect(() => {
        props.setMonth(selectMonth);
    }, [selectMonth]);
    
    useEffect(() => {       // Da um Timeout de 10 milisegundos para realizar o scroll para o mês atual
        setTimeout(() => {
            scrollToMonth(Month);
        }, 100);
    }, []);

    return  (
        <MonthScroll
            ref={monthRef}
            showsHorizontalScrollIndicator={false}      // Não mostrar a barra de rolagem
            decelerationRate="fast"
            horizontal={true}
            snapToInterval={thirdS}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((month, k) => (
                <MonthView key={k} width={size} onPress={() => setSelectMonth(k)}>
                    <Item style={k == selectMonth ? {    // quando o mês for selecionado
                        backgroundColor: '#ff0000',
                        width: '80%',
                        height: 60,
                    } : {}}>
                        <Texto> {month} </Texto>
                    </Item>
                </MonthView>
            ))}
        </MonthScroll>
    );

    
}
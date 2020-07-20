import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';


// View que contém os meses
const MonthScroll = styled.ScrollView`
    width: 100%;
    height: 150px;
`;


// + Button onde ficam os meses
// + View dos dias
// + Texto dos dias
// + Button de passar ou retornar um mês
const MonthView = styled.TouchableHighlight`
    flex-direction: row;
    width: ${props=>props.width};
    justify-content: center;
    align-items: center;
`;
const Item = styled.View`
    width: 50%;
    height: 60px;
    background-color: #333;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;
const Texto = styled.Text`
    color: #fff;
    font-size: 24px;
`;
const Btn = styled.TouchableHighlight`
    background-color: #333;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    margin-right: 25px;
`;


let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 3 para mostrar 3 buttons centralizados 
let size = screenSize + "px";   // Usar para passar a prop de tamanho do MonthButton pois precisa dizer a forma de medição de tamanho
let thirdS = screenSize;        // Usar para o snapToInterval

function MonthScreen (props) {
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

    let Month = new Date().getMonth();  // Pega o mês atual

    useEffect(() => {
        props.setMonth(selectMonth);
    }, [selectMonth]);

    useEffect(() => {
        props.setMonthDispatch(selectMonth + 1);
    }, [selectMonth]);
    
    useEffect(() => {       // Da um Timeout de 10 milisegundos para realizar o scroll para o mês atual
        setTimeout(() => {
            scrollToMonth(Month);
        }, 100);
    }, []);

    function next() {           // Função para passar 1 mês
        if(selectMonth == 11) {     // Se o mês for igual a dezembro
            setSelectMonth(1 - 1);  // Coloca o Month para janeiro (não deu resultado colocando 0, então coloquei 1 - 1)
            scrollToMonth(1 - 1);
        } else {        // Senão, pega o mês que está e aumenta 1, assim passando o mês
            setSelectMonth(selectMonth + 1);
            scrollToMonth(selectMonth + 1);
        }
    }

    function back() {           // Função para retornar 1 mês
        if(selectMonth == 1 - 1) {      // Se o mês for igual a janeiro
            setSelectMonth(11);     // Coloca o mês para dezembro
            scrollToMonth(11);
        } else {    // Senão, pega o mês atual e diminui 1, assim retornando 1 mês
            setSelectMonth(selectMonth - 1);
            scrollToMonth(selectMonth - 1);
        }
    }

    useEffect(() => {

    })

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
                <MonthView key={k} width={size}>
                    <>
                        <Btn onPress={() => back()}>
                            <Icon name="angle-left" size={25} style={{ color: '#fff' }}/>
                        </Btn>
                        <Item style={k == selectMonth ? {    // quando o mês for selecionado
                            backgroundColor: '#3ED3A1',
                            width: '50%',
                            height: 60,
                        } : {}}>
                            <Texto> {month} </Texto>
                        </Item>
                        <Btn onPress={() => next()}>
                            <Icon name="angle-right" size={25} style={{ color: '#fff' }}/>
                        </Btn>
                    </>
                </MonthView>
            ))}
        </MonthScroll>
    );    
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDay:(day)=>dispatch({type:'SET_DAY', payload:{day}}),
        setMonthDispatch:(month)=>dispatch({type:'SET_MONTH', payload:{month}})
    }
}

export default connect(null, mapDispatchToProps) (MonthScreen);
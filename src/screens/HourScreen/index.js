import React from 'react';
import {
    Container,

    Scroll,

    HourView,
    HourItem,
    HourText,
} from './style';
import { useSelector, connect } from 'react-redux';
import { Dimensions } from 'react-native';
import BtnComponent from '../../components/BtnComponent';

const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celula
let size4 = Math.round(screenSize / 4) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho

function HourScreen(props) {
    let hours = [
        { id: '1', hour: '9:00'},
        { id: '2', hour: '9:30'},
        { id: '3', hour: '10:00'},
        { id: '4', hour: '10:30'},
        { id: '5', hour: '11:00'},
        { id: '6', hour: '11:30'},
        { id: '7', hour: '12:00'},
        { id: '8', hour: '12:30'},
    ];


    function setTime(id) {
        props.setHour(id);
    }

    const hourId = useSelector(state=>state.user.hour);

    return(
        <Container>
            <Scroll>

            <HourView>
                {hours.map((h, k) => (
                        <HourItem key={k} width={size4}>
                            <BtnComponent bgColor={hourId==h.id?'#3ED3A1': '#333'} width="95%"  radius="100px" onPress={() => setTime(h.id)}>
                                <HourText color={hourId==h.id?'#333': '#fff'}> {h.hour} </HourText>
                            </BtnComponent>
                        </HourItem>
                ))}
            </HourView>

            </Scroll>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        setHour:(hour)=>dispatch({type:'SET_HOUR', payload:{hour}})
    };
}

export default connect(null, mapDispatchToProps) (HourScreen);
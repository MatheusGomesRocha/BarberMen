import React from 'react';
import {
    Container,

    Scroll,

    SvgView,

    TextView,
    BigText,
    SmallText,

    HourView,
    HourItem,
    HourText,
} from './style';
import { useSelector, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable } from 'react-native';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg from '../../assets/svg/undraw_in_no_time_6igu.svg'

const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celula
let size4 = Math.round(screenSize / 4) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho

function HourScreen(props) {
    const navigation = useNavigation();

    let hours = [
        { id: '1', hour: '9:00'},
        { id: '2', hour: '9:30'},
        { id: '3', hour: '10:00'},
        { id: '4', hour: '10:30'},
        { id: '5', hour: '11:00'},
        { id: '6', hour: '11:30'},
        { id: '7', hour: '12:00'},
        { id: '8', hour: '12:30'},
        { id: '9', hour: '14:00'},
        { id: '10', hour: '14:30'},
        { id: '11', hour: '15:00'},
        { id: '12', hour: '15:30'},
        { id: '13', hour: '16:00'},
        { id: '14', hour: '16:30'},
        { id: '15', hour: '17:00'},
        { id: '16', hour: '17:30'},
        { id: '17', hour: '18:00'},
        { id: '18', hour: '18:30'},
        { id: '19', hour: '19:00'},
        { id: '20', hour: '19:30'},
        { id: '21', hour: '20:00'},
        { id: '22', hour: '20:30'},
    ];


    function setTime(hour) {
        props.setHour(hour);
    }

    function finishChoose() {
        if(hour) {
            alert('Você precisar selecionar um horário');
        } else {
            navigation.navigate('DateChooseScreen');
        }
    }

    const hour = useSelector(state=>state.user.hour);

    return(
        <Container>
            <BtnComponent underlayColor={hour?'#3AA3A1':'#bbb'} onPress={() => finishChoose()} width="60px" height="60px" radius="100px" bgColor={hour?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>
            <Scroll>

            <SvgView>
                <Svg width={280} height={260}/>
            </SvgView>

            <TextView>
                <BigText> Escolha o horário </BigText>
                <SmallText> Finalize o atendimento escolhendo o melhor horário para você (os horários em vermelho, estão ocupados) </SmallText>
            </TextView>

            <HourView>
                {hours.map((h, k) => (
                        <HourItem key={k} width={size4}>
                            <BtnComponent underlayColor="#3ED3A1" bgColor={hour==h.hour?'#3ED3A1': '#333'} width="95%"  radius="100px" onPress={() => setTime(h.hour)}>
                                <HourText color={hour==h.hour?'#333': '#fff'}> {h.hour} </HourText>
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
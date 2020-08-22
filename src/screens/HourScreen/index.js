import React, {useState} from 'react';
import { useSelector, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable, FlatList } from 'react-native';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    TextView,    // View de bem-vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
} from '../../components/HeaderComponent';

import {
    Container,  // View Toda a tela

    Scroll,     // View de scroll

    SvgView,    // View de Svg

    HourView,   // View com todos os horários
    HourItem,   // View com um horário que percorre o array
    HourText,   // Texto com os horários
} from './style';

const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celula
let size4 = Math.round(screenSize / 3) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho

function HourScreen(props) {
    const navigation = useNavigation();
    const hour = useSelector(state=>state.user.hour);
    const [hourFirebase, setHourFirebase] = useState([]);

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
            navigation.navigate('infodate');
        } else {
            alert('Você precisar selecionar um horário');
        }
    }
    
    return(
        <Container>
            <Header>
                <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                    <HeaderLeft>  <Icon name="angle-left" size={22} /> Horário </HeaderLeft>
                </HeaderButton>
                <HeaderButton underlayColor="transparent" onPress={() => finishChoose()}>
                    <HeaderRight color={hour?'#000':'#434343'}> Seguinte <Icon name="angle-right" size={18} /> </HeaderRight>
                </HeaderButton>
            </Header>

            <Scroll>

            <TextView>
                <SmallText color="#434343">  Por último escolha o horário </SmallText>
            </TextView>

            <HourView>
                {hours.map((h, k) => (
                    <HourItem key={k} width={size4}>
                        <BtnComponent onPress={() => setTime(h.hour)} bgColor={hour == h.hour?'#B43718': '#E76F51'} width="95%"  radius="100px">
                            <HourText color="#fff"> {h.hour} </HourText>
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
        setHour:(hour)=>dispatch({type:'SET_HOUR', payload:{hour}})     // Dispatch que seta a hora selecionada com redux
    };
}

export default connect(null, mapDispatchToProps) (HourScreen);
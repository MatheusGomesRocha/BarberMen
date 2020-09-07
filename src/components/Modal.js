import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import ExpandIcon from '../assets/svg/expand.svg';
import PrevIcon from '../assets/svg/nav_prev.svg';
import NextIcon from '../assets/svg/nav_next.svg';
import auth from '@react-native-firebase/auth';
import Api from '../Api';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #48CAE4;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;

const CloseBtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

const ModalItem = styled.View`
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;
const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 15px;
`;

const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const ServiceInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
const ServicePrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const FinishBtn = styled.TouchableOpacity`
    background-color: #0096C7;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;
const FinishBtnText = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

const DateInfo = styled.View`
    flex-direction: row;
`;

const DateBack = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;
const DateTitle = styled.View`
    width: 140px;
    justify-content: center;
    align-items: center;
`;
const DateTitleText = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;
const DateNext = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-start;
`;


const ScrollDay = styled.ScrollView``;

const DateItem = styled.TouchableOpacity`
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const DateWeek = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
const DateDay = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;


const ScrollTime = styled.ScrollView``;

const TimeItem = styled.TouchableOpacity`
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
const TimeText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const months = [        // Array de meses
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
];

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];     // Array de dias da semana

const hours = [         // Array de horas
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

export default ({show, setShow, barber, serviceName, servicePrice, serviceId}) => {     // Recebe dados da tela do barbeiro e do serviço que o usuário "agendou"
                                                                                        // Show variável boolean para mostrar o Modal
                                                                                        // setShow seta a variável show
                                                                                        // barber é o nome dos barbeiros
                                                                                        // serviceName nome do serviço agendado
                                                                                        // servicePrice preço do serviço
                                                                                        // serviceId id do serviço

    const [selectYear, setSelectYear] = useState(0);            // Ano selecionado
    const [selectMonth, setSelectMonth] = useState(0);          // Mês selecionado
    const [selectDay, setSelectDay] = useState(0);              // Dia selecionado
    const [selectHour, setSelectHour] = useState();             // Hora selecionado
    const [listDays, setListDays] = useState([]);               // Dias

    const userId = auth().currentUser.uid;                      // Usuário logado

    const navigation = useNavigation();

    useEffect(() => {       // Hook que executa sempre que as variáveis selectMonth e selectYear mudarem
        let daysInMonth = new Date(selectYear, selectMonth+1, 0).getDate(); // Pega o dias que tem no mês (+1 porque o JS sempre pega 1 mês antes do atual)
        let newListDays = [];
        
        for(let i=1;i<=daysInMonth; i++) {      // Loop para setar dias no mês
            let d = new Date(selectYear, selectMonth, i);   // variável que pega ano selecionado, mês selecionado e verifica quantos dias tem nesse mês

            let year = d.getFullYear();    
            let month = d.getMonth() + 1;
            let day = d.getDate();

            month = month < 10 ? '0'+month: month;      // se o mês for menor que 10 acrescenta o 0 antes (09)
            day = day < 10 ? '0'+day: day;              // se o dia for menor que 10 acrescenta o 0 antes (01)
            
            let FormatedDate = day+'/'+month+'/'+year;      // Formata a data (20/08/2020);
            
            newListDays.push({
                week: days[d.getDay()],         // Dia da semana 
                day: i
            });
        }

        setListDays(newListDays);       // seta uma nova lista de dias para cada mês
        setSelectDay(0);                // zera o dia selecionado
        setSelectHour(0);               // zera o horário selecionado
        
    }, [selectMonth, selectYear]);


    useEffect(() => {       // Hook que pega o dia atual e seta nas variáveis de seleção
        let today = new Date();
        setSelectYear(today.getFullYear());
        setSelectMonth(today.getMonth());
        setSelectDay(today.getDate());
    }, [])

    const prevDate = () => {        // Função que volta 1 mês 
        let mountDate = new Date(selectYear, selectMonth, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setSelectYear(mountDate.getFullYear());
        setSelectMonth(mountDate.getMonth());
        setSelectDay(0);
    }

    const nextDate = () => {        // Função que avannça 1 mês
        let mountDate = new Date(selectYear, selectMonth, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setSelectYear(mountDate.getFullYear());
        setSelectMonth(mountDate.getMonth());
        setSelectDay(0);
    }

    const closeModal = () => {      // Função que fecha o modal
        setShow(false); 
    }

   

    const finishAppointment = async () => {     // Função que seta um agendamento no banco de dados (firebase)
        let id = Math.floor(Math.random() * (999999999 - 1));   // id aleatório entre 999999999 e 1
        
        // Se todos os usuários estiverem preenchidos
        if(barber.id && userId && serviceId && serviceName && servicePrice && selectDay > 0 && selectMonth > 0 && selectYear > 0 && selectHour) {
            
            // Manda as variáveis para a Api e seta o agendamento 
            let json = await Api.setAppointment(id, barber.id, barber.name, userId, serviceId, serviceName, servicePrice, selectDay, 
                                                selectMonth, selectYear, selectHour, navigation);

            if(json) {
                navigation.navigate('appointments');
                Alert.alert(
                    "Sucesso",
                    "Horário agendado, certifique-se de chegar um pouco antes do horário marcado para não haver problemas",
                    [
                      { text: "OK" }
                    ],
                    { cancelable: false }
                  );                     }
                 
        } else {
            Alert.alert(
                "Sucesso",
                "Você esqueceu alguma coisa, revise novamente seus dados",
                [
                  { text: "OK" }
                ],
                { cancelable: false }
              ); 
        }
    }

    return(
        <Modal 
            transparent={true}
            visible={show}
            animationType="slide"
        >
            <ModalArea>
                <ModalBody>

                    <CloseBtn onPress={closeModal}>
                        <ExpandIcon width="40" height="40" fill="#000" />
                    </CloseBtn>

                    <ModalItem>
                        <UserInfo>
                            <Avatar source={require('../assets/img/perfil3.jpg')} />
                            <Name> {barber.name} </Name>
                        </UserInfo>
                    </ModalItem>

                    <ModalItem>
                        <ServiceInfo>
                            <ServiceName> {serviceName} </ServiceName>
                            <ServicePrice> R$ {servicePrice} </ServicePrice>
                        </ServiceInfo>
                    </ModalItem>

                    <ModalItem>
                        <DateInfo>
                            <DateBack onPress={prevDate}>
                                <PrevIcon width="35" height="35" fill="#000" />
                            </DateBack>
                            <DateTitle>
                                <DateTitleText> {months[selectMonth]} {selectYear}</DateTitleText>
                            </DateTitle>

                            <DateNext onPress={nextDate}>
                                <NextIcon width="35" height="35" fill="#000" />
                            </DateNext>
                        </DateInfo>

                        <ScrollDay decelerationRate="fast" horizontal={true} showsHorizontalScrollIndicator={false}>
                            {listDays.map((item, k) => (
                                <DateItem 
                                    onPress={() => setSelectDay(item.day)} 
                                    key={k}
                                    style={{
                                        opacity: item.week == 'Sab' || item.week == 'Dom' ? 0.2 : 1,
                                        backgroundColor: item.day == selectDay ? '#48CAE4' : '#fff' 
                                    }}
                                    disabled={item.week == 'Sab' || item.week == 'Dom' ? true : false}
                                >
                                    <DateWeek style={{color: item.day == selectDay ? '#fff' : '#000' }}> {item.week} </DateWeek>
                                    <DateDay style={{color: item.day == selectDay ? '#fff' : '#000' }}> {item.day} </DateDay>
                                </DateItem>
                            ))}
                        </ScrollDay>
                    </ModalItem>

                    
                    <ModalItem>
                            <ScrollTime decelerationRate="fast" horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {hours.map((item, k) => (
                                        <TimeItem key={k} onPress={() => setSelectHour(item.hour)} style={{backgroundColor: item.hour == selectHour ? '#48CAE4' : '#fff'}}>
                                            <TimeText style={{color: item.hour == selectHour ? '#fff' : '#333'}}> {item.hour} </TimeText>
                                        </TimeItem>
                                    ))}
                            </ScrollTime>
                    </ModalItem>

                    <FinishBtn onPress={finishAppointment}>
                        <FinishBtnText> Finalizar agendamento </FinishBtnText>
                    </FinishBtn>
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}
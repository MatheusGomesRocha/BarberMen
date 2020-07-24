import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';
import SvgMoney from '../../assets/svg/undraw_wallet_aym5.svg';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import { 
    Pressable,
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View 
} from 'react-native';

import { 
    Container,      // View de toda a tela

    Scroll,         // View que realiza scroll
    
    SvgView,        // View que fica o SVG

    TableView,      // View onde ficam todos os items 
    ItemView,       // View onde fica 1 item (TEMPORÁRIO. PEGAR DADOS QUE VÃO VIR DO FIREBASE DEPOIS DE SEREM CADASTRADOS PELO O USUÁRIO E PASSAR PARA UM BUTTON)
    ItemText,       // Texto que fica o nome do item 
    PriceText,      // Texto que fica o preço do item
    
} from './style';

function Price(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();     
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux

    function setCutAndDuration(cut, duration) {        // Função que seta um corte para o redux
        props.setCut(cut);
        props.setDuration(duration);
    }

    function goToDate() {       // Função ao apertar no botão grande
        if(name) {
            navigation.navigate('date');
        } else {
            alert('Você precisa escolher um corte');
        }
    }
    

    // Array temporário, fazer com que o admin cadastre no firebase e traga para cá
    let cuts = [
        { id: '1', name: 'Normal', price: 'R$ 25,00', duration: '15~30 minutos'},
        { id: '2', name: 'Infantil', price: 'R$ 15,00', duration: '15~30 minutos'},
        { id: '3', name: 'Degradê', price: 'R$ 25,00', duration: '20~40 minutos'},
        { id: '4', name: 'Pintar', price: 'R$ 25,00', duration: '45~60 minutos'},
        { id: '5', name: 'Luzes', price: 'R$ 25,00', duration: '1:00~1:30 horas'},
        { id: '6', name: 'Platinar', price: 'R$ 25,00', duration: '2:00~2:30 minutos'},
        { id: '7', name: 'Normal + Barba', price: 'R$ 25,00', duration: '40~50 minutos'},
        { id: '8', name: 'Degradê + Barba', price: 'R$ 25,00', duration: '50~60 minutos'},
    ];


    return (
        <Container>
            <BtnComponent underlayColor={name?'#3AA3A1':'#bbb'} onPress={() => goToDate()} width="60px" height="60px" radius="100px" bgColor={name?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>
            <Scroll decelerationRate="fast">
                
                <SvgView>
                    <SvgMoney width={280} height={260}/>
                </SvgView>

                <TextView>
                    <BigText> Preços de serviços </BigText>
                    <SmallText> 
                        Escolha o corte que irá fazer clicando nele, você será redirecionado para escolher
                        o dia e horário, caso não tenha escolhido ainda.
                    </SmallText>
                </TextView>

                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}> {name} </Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => { setModalVisible(!modalVisible) }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                                
                {/** Depois cadastrar esses dados em um bd e trazer pra cá */}
                <TableView>
                    {cuts.map((c, k) => (
                            <ItemView key={k}>
                                
                            <Pressable onPress={() => setCutAndDuration(c.name, c.duration)} onLongPress={() => setModalVisible(true)}
                            style={{
                                    flexDirection:'row', backgroundColor: name == c.name?'#3ED3A1':'#333', 
                                    color: '#fff', height: 60, width: '90%', borderRadius: 100, justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <>
                                    <ItemText color={name == c.name?'#333': '#fff'}> {c.name} </ItemText>
                                    <PriceText color={name == c.name?'#333': '#fff'}> {c.price} </PriceText>
                                    </>
                            </Pressable>
                            </ItemView>
                    ))}                   
                </TableView>

            </Scroll>
        </Container>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
  
const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}}),       // Fazendo a inserção no reducer
        setDuration:(duration)=>dispatch({type:'SET_DURATION', payload: {duration}}) 
    };

}

export default connect(null, mapDispatchToProps) (Price);
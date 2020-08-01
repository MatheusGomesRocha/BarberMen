import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';
import SvgMoney from '../../assets/svg/undraw_wallet_aym5.svg';
import firestore from '@react-native-firebase/firestore';

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
    const user = useSelector(state => state.user.email);
    const dark = useSelector(state => state.user.dark);
    const [cuts, setCuts] = useState([]);

    function setCutAndDuration(cut, duration) {        // Função que seta um corte para o redux
        if(user) {
            props.setCut(cut);
            props.setDuration(duration);
        } else {
            alert('Você precisa está logado para realizar essa ação');
        }
    }

    function goToDate() {       // Função ao apertar no botão grande
        if(!user) {
            alert('Você precisa estar logado para realizar essa ação');
        } else if(!name) {
            alert('Você precisa escolher um corte');
        } else {
            navigation.navigate('date');
        }
    }

    useEffect(() => {
        const subscriber = firestore()
          .collection('cuts')
          .onSnapshot(querySnapshot => {
            const cuts = [];

            querySnapshot.forEach(documentSnapshot => {
                cuts.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setCuts(cuts);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

      let bg = "#fff";
      let color = "#333";
      if(dark) {
        bg = "#333";                                // Cor para backgrounds e texto de buttons
        color = "#fff";                             // Cor para textos e bordas do input
      }

    return (
        <Container bgColor={bg}>
            <BtnComponent underlayColor={name?'#3AA3A1':'#bbb'} onPress={() => goToDate()} width="60px" height="60px" radius="100px" bgColor={name?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>
            <Scroll decelerationRate="fast">
                
                <SvgView>
                    <SvgMoney width={280} height={260}/>
                </SvgView>

                <TextView>
                    <BigText color={color}> Preços de serviços </BigText>
                    <SmallText color={color}> 
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
                                    flexDirection:'row', backgroundColor: name == c.name?'#3ED3A1':color, 
                                    color: '#fff', height: 60, width: '90%', borderRadius: 100, justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <>
                                    <ItemText color={name == c.name?'#333': bg}> {c.name} </ItemText>
                                    <PriceText color={name == c.name?'#333': bg}> {c.price} </PriceText>
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
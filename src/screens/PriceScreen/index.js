import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';
import SvgMoney from '../../assets/svg/undraw_wallet_aym5.svg';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
} from '../../components/HeaderComponent';

import { 
    Pressable,
    Alert,
    TouchableHighlight,
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
    const navigation = useNavigation();     
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux
    const user = useSelector(state => state.user.email);
    const dark = useSelector(state => state.user.dark);
    const [cuts, setCuts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const userInfo = auth().currentUser;
    const [userName, setUserName] = useState();

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

      useEffect(() => {
        if(userInfo) {
            firestore()
            .collection('users')
            .where('id', '==', userInfo.uid)
            .get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    setUserName(documentSnapshot.data().name);
                })
            })
        }
      }, []);

      let bg = "#fff";
      let color = "#333";
      if(dark) {
        bg = "#333";                                // Cor para backgrounds e texto de buttons
        color = "#fff";                             // Cor para textos e bordas do input
      }

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 3000)
    }, [])

    function AddFavorites(name, id) {
        firestore()
        .collection('favorites')
        .doc(id)
        .set({
            idUser: userInfo.uid,
            idCut: id,
            nameUser: userName,
            nameCut: name,
        }).then(() => {
            alert('Adicionado com sucesso aos favoritos')
        })
    }

    function customAlert(name, id) {
        Alert.alert(
            'Favoritar',
            "Adicionar "+name+" aos favoritos?",
            [
              {
                text: "Cancelar",
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => AddFavorites(name, id),
              },
            ],
            { cancelable: false }
        );
    }

    return (
        <Container bgColor={bg}>
            <Header>
                <HeaderLeft> Cortes </HeaderLeft>
                <HeaderButton onPress={() => goToDate()}>
                    <HeaderRight color={name?'#000':'#434343'}> Seguinte <Icon name="angle-right" size={18} /> </HeaderRight>
                </HeaderButton>
            </Header>
            <Scroll decelerationRate="fast">
                
                <TextView>
                    <SmallText color="#434343"> 
                        Escolha o serviço que deseja
                    </SmallText>
                </TextView>

                
                {/** Depois cadastrar esses dados em um bd e trazer pra cá */}
                <TableView>
                    {cuts.map((c, k) => (
                        <ShimmerPlaceholder
                        style={{height: 60, width: '100%', borderRadius: 100, marginTop: 10, marginBottom: 10, margiLeft: 20, marginRight: 20}}
                        autoRun={true}
                        visible={isVisible}
                        key={k}
                        >
                            <ItemView>
                                
                            <Pressable onPress={() => setCutAndDuration(c.name, c.duration)} onLongPress={() => customAlert(c.name, c.id)}
                            style={{
                                    flexDirection:'row', backgroundColor: name == c.name?'#B43718':'#E76F51', 
                                    color: '#fff', height: 60, width: '90%', borderRadius: 100, justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <>
                                    <ItemText color='#fff'> {c.name} </ItemText>
                                    <PriceText color='#fff'> R$ {c.price} </PriceText>
                                    </>
                            </Pressable>
                            </ItemView>
                        </ShimmerPlaceholder>
                    ))}                   
                </TableView>

            </Scroll>
        </Container>
    );
}


const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}}),       // Fazendo a inserção no reducer
        setDuration:(duration)=>dispatch({type:'SET_DURATION', payload: {duration}}) 
    };

}

export default connect(null, mapDispatchToProps) (Price);
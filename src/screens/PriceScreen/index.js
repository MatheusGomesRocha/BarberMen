import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, connect } from 'react-redux';
import { 
    Container,      // View de toda a tela

    Scroll,         // View que realiza scroll
    
    SvgView,        // View que fica o SVG

    ViewText,       // View que fica o texto
    BigText,        // Texto grande
    SmallText,      // Texto pequeno

    TableView,      // View onde ficam todos os items 
    ItemView,       // View onde fica 1 item (TEMPORÁRIO. PEGAR DADOS QUE VÃO VIR DO FIREBASE DEPOIS DE SEREM CADASTRADOS PELO O USUÁRIO E PASSAR PARA UM BUTTON)
    ItemText,       // Texto que fica o nome do item 
    PriceText,      // Texto que fica o preço do item
    
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';
import SvgMoney from '../../assets/svg/undraw_wallet_aym5.svg';

function Price(props) {
    const navigation = useNavigation();     
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux

    function setCut(c) {        // Função que seta um corte para o redux
        props.setCut(c)
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
        { id: '1', name: 'Normal', price: 'R$ 25,00'},
        { id: '2', name: 'Infantil', price: 'R$ 15,00'},
        { id: '3', name: 'Degradê', price: 'R$ 25,00'},
        { id: '4', name: 'Pintar', price: 'R$ 25,00'},
        { id: '5', name: 'Luzes', price: 'R$ 25,00'},
        { id: '6', name: 'Platinar', price: 'R$ 25,00'},
        { id: '7', name: 'Normal + Barba', price: 'R$ 25,00'},
        { id: '8', name: 'Degradê + Barba', price: 'R$ 25,00'},
    ];

    return (
        <Container>
            <BtnComponent onPress={() => goToDate()} width="60px" height="60px" radius="100px" bgColor={name?'#3ED3A1':'#ccc'} style={{zIndex: 9999, position: 'absolute', right: 15, top: 15}}>
                <Icon name="arrow-right" size={25} color="#333"/>
            </BtnComponent>
            <Scroll decelerationRate="fast">
                
                <SvgView>
                    <SvgMoney width={280} height={260}/>
                </SvgView>

                <ViewText>
                    <BigText> Preços de serviços </BigText>
                    <SmallText> 
                        Escolha o corte que irá fazer clicando nele, você será redirecionado para escolher
                        o dia e horário, caso não tenha escolhido ainda.  {name}
                    </SmallText>
                </ViewText>

                {/** Depois cadastrar esses dados em um bd e trazer pra cá */}
                <TableView>
                    {cuts.map((c, k) => (
                            <ItemView key={k}>
                                <BtnComponent height="100%" underlayColor="#3ED3A1" width="90%" bgColor={name == c.name?'#3ED3A1':'#333'} onPress={() => setCut(c.name)}>
                                    <>
                                    <ItemText color={name == c.name?'#333': '#fff'}> {c.name} </ItemText>
                                    <PriceText color={name == c.name?'#333': '#fff'}> {c.price} </PriceText>
                                    </>
                                </BtnComponent>
                            </ItemView>
                    ))}                   
                </TableView>

            </Scroll>
        </Container>
    );
}


const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}})       // Fazendo a inserção no reducer
    };

}

export default connect(null, mapDispatchToProps) (Price);
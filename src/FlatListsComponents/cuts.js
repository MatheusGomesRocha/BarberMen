import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import styled from 'styled-components/native';
import {Pressable} from 'react-native';


const ItemView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
`;
const ItemText = styled.Text`
    margin-left: 5px;
    font-size: 17px;
    width: 70%;
    color: #fff;
`;
const PriceText = styled.Text`
    font-size: 16px;
    color: #fff;
    ;
`;


function Cuts(props) {
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux
    const [isVisible, setIsVisible] = useState(false);
    const user = useSelector(state => state.user.email);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 3000)
    }, [])

    function setCutAndDuration(cut, duration, price) {        // Função que seta um corte para o redux
        if(user) {
            props.setCut(cut);
            props.setDuration(duration);
            props.setPrice(price)
            
        } else {
            alert('Você precisa está logado para realizar essa ação');
        }
    }

    return(
            <ItemView>
                <Pressable onPress={() => setCutAndDuration(props.data.name, props.data.duration, props.data.price)} onLongPress={() => customAlert(props.data.name, props.data.id)}
                style={{
                        flexDirection:'row', backgroundColor: name == props.data.name?'#B43718':'#E76F51', 
                        color: '#fff', height: 60, width: '100%', borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <>
                            <ItemText color='#fff'> {props.data.name} </ItemText>
                            <PriceText color='#fff'> R$ {props.data.price} </PriceText>
                        </>
                </Pressable>
            </ItemView>
    );
}


const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}}),       // Fazendo a inserção no reducer
        setDuration:(duration)=>dispatch({type:'SET_DURATION', payload: {duration}}), 
        setPrice:(price)=>dispatch({type:'SET_PRICE', payload: {price}}), 
    };

}

export default connect(null, mapDispatchToProps) (Cuts);
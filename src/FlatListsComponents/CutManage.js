import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import styled from 'styled-components/native';
import {Pressable} from 'react-native';


const ItemView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 80px;
    borderTopWidth: 1px;
    borderTopColor: #434343;
    align-items: center;
`;
const ItemText = styled.Text`
    font-size: 17px;
    color: #333;
`;
const PriceText = styled.Text`
    font-size: 16px;
    color: #333;
`;
const LeftView = styled.View`
    flex-direction: column;
    width: 70%;
    padding-left: 15px;
`;
const RightView = styled.View`
    width: 30%;
`;


function Cuts(props) {
    const cutId = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux
    const user = useSelector(state => state.user.email);

    function setCut(id) {        // Função que seta um corte para o redux
        if(user) {
            props.setCut(id);
        } else {
            alert('Você precisa está logado para realizar essa ação');
        }
    }

    return(
            <ItemView>
                <Pressable onPress={() => setCut(props.data.id)}
                style={{
                        flexDirection:'row', backgroundColor: cutId == props.data.id?'#434343':'transparent', 
                        color: '#fff', height: 80, width: '100%', 
                        alignItems: 'center'
                    }}>
                        <>
                            <LeftView>
                                <ItemText style={{color:cutId == props.data.id?'#fff':'#434343' }}>{props.data.name}</ItemText>
                                <PriceText style={{color:cutId == props.data.id?'#fff':'#434343' }}>{props.data.duration} </PriceText>
                            </LeftView>
                            <RightView>
                                <ItemText style={{color:cutId == props.data.id?'#fff':'#434343' }}> R${props.data.price} </ItemText> 
                            </RightView>
                        </>
                </Pressable>
            </ItemView>
    );
}


const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}}),       // Fazendo a inserção no reducer
    };

}

export default connect(null, mapDispatchToProps) (Cuts);
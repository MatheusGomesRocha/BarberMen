import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import styled from 'styled-components/native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {Pressable} from 'react-native';


const HistoryView = styled.View``;

const ItemView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    borderBottomWidth: 1px;
    borderBottomColor: #434343;
`;

const LeftView = styled.View`
    flex-direction: column;
`;

const RightView = styled.View`
    align-items: center;
    justify-content: center;
`;

const DefaultText = styled.Text`
    font-size: 16px;
`;

const Bold = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

function History(props) {
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux
    const user = useSelector(state => state.user.email);

   
    function setCutAndDuration(id) {        // Função que seta um corte para o redux
        if(user) {
            props.setCut(id);
        } else {
            alert('Você precisa está logado para realizar essa ação');
        }
    }

    return(
                <HistoryView>
                        <ItemView>
                            <LeftView>
                                <DefaultText> <Bold> Serviço: </Bold> {props.data.cut}</DefaultText>
                                <DefaultText> <Bold> Data: </Bold> {props.data.day}/2020</DefaultText>
                                <DefaultText> <Bold> Barbeiro: </Bold> {props.data.barber}</DefaultText>
                            </LeftView>
                            <RightView>
                                <DefaultText> <Bold> Preço: </Bold> R$ {props.data.price}</DefaultText>
                            </RightView>
                        </ItemView>
                </HistoryView>
    );
}


const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para realizar o dispatch para o redux */
    return {
        setCut:(cut)=>dispatch({type:'SET_CUT', payload: {cut}}),       // Fazendo a inserção no reducer
    };

}

export default connect(null, mapDispatchToProps) (History);
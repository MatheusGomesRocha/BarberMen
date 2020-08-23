import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import styled from 'styled-components/native';
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

export default (props) => {
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


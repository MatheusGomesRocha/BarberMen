import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Teste = styled.View`
`;


const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #E76F51;
    height: 80px;
    
`;
const HeaderLeft = styled.Text`
    color: #fff;
    font-size: 22px
`
const HeaderRight = styled.Text`
    color: ${props=>props.color};
    font-size: 22px;
`
const HeaderButton = styled.TouchableOpacity`
    justify-content: center;
    height: 80px;
`;

export default (props) => {
    const name = useSelector(state => state.user.cut);      // Pegando o corte que foi mandado via redux

    return(
        <Header>
            <HeaderLeft> {props.left} </HeaderLeft>
            <HeaderButton>
                <HeaderRight color={name?'#000':'#333'}> Seguinte <Icon name="angle-right" size={25}/> </HeaderRight>
            </HeaderButton>
        </Header>
    );
}
import styled from 'styled-components/native';


export const Teste = styled.View`
`;


export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #E76F51;
    height: 80px;
    
`;
export const HeaderLeft = styled.Text`
    color: #fff;
    font-size: 22px
`
export const HeaderRight = styled.Text`
    color: ${props=>props.color};
    font-size: 22px;
`
export const HeaderButton = styled.TouchableOpacity`
    justify-content: center;
    height: 80px;
`;

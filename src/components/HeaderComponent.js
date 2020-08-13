import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #E76F51;
`;
export const HeaderLeft = styled.Text`
    margin-left: 10px;
    color: #fff;
    font-size: 20px
`
export const HeaderRight = styled.Text`
    margin-right: 10px;
    color: ${props=>props.color};
    font-size: 18px;
`
export const HeaderButton = styled.TouchableOpacity`
    justify-content: center;
`;

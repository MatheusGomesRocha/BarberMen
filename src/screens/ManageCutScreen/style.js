import styled from 'styled-components/native';


// Tela
export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: #fff;
`;


// Texto do Butotn
export const BtnText = styled.Text`
    color: ${props=>props.color || '#fff'};
    font-size: 18px;
`;


// FlatList
export const Flat = styled.FlatList`
`;


// Header Text
export const Texto = styled.Text`
    color: #434343;
    font-size: 18px;
    margin: 20px 25px 50px 25px;
    text-align: center;
`;


// + View caso não usuário não tenha historico
// + Texto caso não usuário não tenha historico
export const IfNotView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 20px;
`;
export const IfNotText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #434343;
`;
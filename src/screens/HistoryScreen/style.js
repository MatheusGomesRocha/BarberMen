import styled from 'styled-components/native';


// Tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// FlatList
export const Flat = styled.FlatList``;


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
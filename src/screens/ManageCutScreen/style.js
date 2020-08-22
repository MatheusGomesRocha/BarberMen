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
import styled from 'styled-components/native';


// Tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// Permite a rolagem da tela
export const Scroll = styled.ScrollView``;


// + View pai
// + Caixas de Input
// + Texto do Input
export const AddView = styled.View`
    width: 100%;
    align-items: center;
`;
export const AddInput = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 50px;
    width: 90%;
    margin-top: 20px;
`;
export const InputText = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;


// Texto do BtnComponent
export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;
import styled from 'styled-components/native';


// Tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// Permite a rolagem da tela
export const Scroll = styled.ScrollView``;

export const InputView = styled.View`
    margin: 50px 40px 50px 40px;
`;


// + View que fica os Inputs
// + Texto
// + Input   
export const LabelText = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;
export const Input = styled.TextInput`
    border: 1px solid #434343;
    border-radius: 30px;
    width: 100%;
    align-items: center;
    padding: 10px;
`;
export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
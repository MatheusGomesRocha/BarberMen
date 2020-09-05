import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #48CAE4;
    justify-content: center;
    align-items: center;
`

// View com o form de login
export const ViewLogin = styled.View`
`;


// Input
export const Input = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    height: 60px;
    background-color: #fff;
    width: 80%;
    margin-top: 10px;
`;


// Texto do Button e Forgot
export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;


// + Texto do cadastro
// + Botão para ir para o cadastro
export const RegisterText = styled.Text`
    color: #eee;
    font-size: 16px;
`;
export const RegisterBtn = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 15px;
`;


import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    justify-content: center;
`

// Permite a rolagem da tela
export const Scroll = styled.ScrollView``;


// View com o form de login
export const ViewLogin = styled.View`
`;


// + View de um input
// + Input
export const InputView = styled.View`
    justify-content: center;
    width: 80%;
    margin: 0 0 25px 35px;
`;
export const Input = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 50px;
`;


// + View de Button de realizar login
// + Texto do Button e Forgot
export const BtnView = styled.View`
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

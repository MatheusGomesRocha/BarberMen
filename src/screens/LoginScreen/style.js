import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-end;
    background-color: #fff;
`


// + View com svg e texto de Login
// + Texto Login grande
export const TextView = styled.View`
    height: 40%;
    align-items: center;
    justify-content: center;
`
export const BigText = styled.Text`
    margin-top: 15px;
    font-size: 28px;
    text-align: center;
`;


// View com o form de login
export const ViewLogin = styled.View`
    background-color: #333;
    height: 60%;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
`;


// Só irá realizar scroll dentro dessa view acima
export const Scroll = styled.ScrollView`
    margin-top: 50px;
`;


// + View de um input
// + Input
export const InputView = styled.View`
    justify-content: center;
    width: 80%;
    margin: 0 0 30px 35px;
`;
export const Input = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    color: #fff;
`;


// + View de Button de realizar login
// + Texto do Button e Forgot
export const BtnView = styled.View`
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    font-size: 18px;
`;

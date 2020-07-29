import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`


// Só irá realizar scroll dentro dessa view acima
export const Scroll = styled.ScrollView`
`;


// + View com svg e texto de Cadastro
// + Texto Cadastro grande
export const TextView = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;

`
export const BigText = styled.Text`
    margin-top: 10px;
    font-size: 28px;
    text-align: center;
`;


// View com o form de cadastro
export const ViewSignUp = styled.View`
`;



// + View de um input
// + Input
export const InputView = styled.View`
    justify-content: center;
    width: 80%;
    margin: 0 0 20px 35px;
`;
export const Input = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 50px;
`;


// + View de Button de realizar login
// + Texto do Button e Arraste
export const BtnView = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;
export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

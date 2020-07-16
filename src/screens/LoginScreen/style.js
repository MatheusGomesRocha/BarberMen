import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-end;
    background-color: #fff;
`
export const Scroll = styled.ScrollView`
    margin-top: 50px;
`;

export const ViewLogin = styled.View`
    background-color: #333;
    height: 60%;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
`;

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


export const BtnView = styled.View`
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    font-size: 18px;
`;

export const SingUpView = styled.View`
    margin: 30px 0 50px 0;
    align-items: center;
    justify-content: center;

`;
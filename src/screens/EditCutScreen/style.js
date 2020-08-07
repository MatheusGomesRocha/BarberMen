import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const EditView = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;


export const InputView = styled.View`
    width: 90%;
    margin-top: 30px;
`;
export const InputText = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;
export const EditInput = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 50px;
`

export const BtnText = styled.Text`
    color: #fff;
    font-size: 16px;
`;
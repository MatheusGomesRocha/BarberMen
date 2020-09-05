import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #48CAE4;
    align-items: center;
    justify-content: center;

`;


// View que realiza o Scroll
export const Scroll = styled.ScrollView`
    flex: 1;
`;


// + View de profile image
// + Image
export const PicView = styled.View`
    align-items: center;
    justify-content: center;
    height: 200px;
`;
export const Img = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
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


// + View do Button de salvar
// + Texto do Button de salvar
export const BtnView = styled.View`
    margin: 20px 0 30px 0;
`;
export const BtnText = styled.Text`
    color: #fff; 
    font-size: 18px;
`;
import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View que realiza o Scroll
export const Scroll = styled.ScrollView``;


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
    color: #434343;
    border: 1px solid;
    border-color: #434343;
    border-radius: 50px;
    padding: 10px;
    font-size: 14px;
    width: 80%;
    margin: 0 0 25px 35px;
`;


// + View do Button de salvar
// + Texto do Button de salvar
export const BtnView = styled.View`
    margin: 20px 0 30px 0;
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    color: #fff; 
    font-size: 18px;
`;
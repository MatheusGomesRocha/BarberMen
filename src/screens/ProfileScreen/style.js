import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View que realiza o Scroll
export const Scroll = styled.ScrollView``;


// + View de profile picture
// + Texto do Button para trocar a foto
export const PicView = styled.View`
    align-items: center;
    justify-content: center;
    height: 200px;
`;
export const Texto = styled.Text`
    color: #fff;
`;


// + View do Input
// + Label do input
// + O input
export const InputView = styled.View`
    width: 80%;
    margin: 0 0 15px 35px;
`;
export const InputText = styled.Text`
    font-size: 16px;
    color: #333;
    margin-top: 10px;
`;
export const Input = styled.TextInput`
    color: #333;
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
    
`;
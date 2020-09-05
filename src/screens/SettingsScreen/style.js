import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #48CAE4;
`;


// View que realiza scroll
export const Scroll = styled.ScrollView``;


// + View com foto do usuário
// + Texto abaixo da foto do usuário
export const UserView = styled.View`
    background-color: #0096C7;
    height: 180px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const Texto = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
    text-align: center;
`;


// + View com todos os buttons
// + Button
// + Texto padrão com os nomes
export const SettingsView = styled.View`
    width: 100%;
    flex-direction: column;
    borderBottomWidth: 1px;
    borderBottomColor: #0096C7;
`;
export const SettingsButton = styled.TouchableHighlight`
    height: 70px;
    borderTopWidth: 1px;
    borderTopColor: #0096C7;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;    
`;
export const DefaultText = styled.Text`
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 18px;
    margin-left: 10px;
    width: 90% ;
    color: #fff;
`;

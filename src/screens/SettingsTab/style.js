import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFc491;
`;


// View que realiza scroll
export const Scroll = styled.ScrollView``;


// + View com foto do usuário
// + Texto abaixo da foto do usuário
export const UserView = styled.View`
    background-color: #333;
    height: 180px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const Texto = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
`;


// + View com todos os buttons
// + Button
// + Texto padrão com os nomes
// + Texto de ON OFF no Switch
export const SettingsView = styled.View`
    width: 100%;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
    flex-direction: column;
`;
export const SettingsButton = styled.TouchableHighlight`
    height: 60px;
    borderTopWidth: 1px;
    borderTopColor: rgba(0, 0, 0, 0.1);
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`;
export const DefaultText = styled.Text`
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 16px;
    margin-left: 10px;
    width: ${props=>props.width || '90%'} ;
`;
export const EnabledText = styled.Text`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`;
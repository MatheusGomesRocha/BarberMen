import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View de Scroll
export const Scroll = styled.ScrollView``;


// + View todas as perguntas
// + View uma pergunta
// + Texto de pergunta
export const AskView = styled.View``;
export const AskItem = styled.View`
    height: 65px;
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.5);
    justify-content: center;
`;
export const AskText = styled.Text`
    font-size: 16px;
    margin-left: 10px;
`;


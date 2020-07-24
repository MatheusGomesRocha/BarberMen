import styled from 'styled-components/native';

// A margin entre views vai ser 50px Top e Bottom ou sem margin devido ao alinhamento no centro que já da um margin padrão para os 4 lados
// A margin entre texts vai ser 20px Top e Bottom

//View de toda a tela
export const Container = styled.SafeAreaView`   
    flex: 1;
    background-color: #fff;
`;


//View para realizar scroll
export const Scroll = styled.ScrollView`

`;


// View que ficou o SVG
export const SvgView = styled.View`
    align-items: center;
    justify-content: center;
`;


// + View com botão de login 
// + Texto dentro do button
export const LoginBtnView = styled.View`
    align-items: center;
    justify-content: center;
    height: 200px;
`;
export const BtnText = styled.Text`
    color: #fff;
    font-size: 20px;
    width: 80%;
`;

// + View onde fica todo o título da sessão de comentários
// + View pra mostrar uma linha de 40% da tela
// + View que fica o texto do título da sessão de comentários
// + Texto com o título da sessão de comentários
// + View da sessão de comentários
// + Texto da sessão de comentários
export const CommentsTitle = styled.View``
export const LineView = styled.View`
    margin-top: 10px;
    height: 1px;
    width: 25%;
`;
export const TitleView = styled.View``;
export const TitleText = styled.Text``;
export const CommentsView = styled.View`
    width: 100%;
    height: 300px;
    background-color: #ccc;
    margin-top: 25px;
`;
export const CommentsText = styled.Text`
    font-size: 24px;
`;


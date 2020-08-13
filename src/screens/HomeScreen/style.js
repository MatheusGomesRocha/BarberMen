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
    margin: 0 20px 0 20px;
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
// + Texto com o título da sessão de comentários
export const CommentsTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 20px 0 0px;
`
export const TitleText = styled.Text`
    font-size: 24px;
    color: #434343;
`;


// + View com todos os comentários em um array
// + View dentro do array que retorna para cada comentário
// + View com avatar e nome do usuário
// + Imagem do avatar 
// + Texto do nome
// + View com estrelas mostrando o rating e a data do comentário
// + Text com a data do comentário
// + Texto da sessão de comentários
export const CommentsView = styled.View`
`;
export const Comments = styled.View`
    margin: 35px 0px 20px 0px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
`;
export const CommentsHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CommentsAvatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;
export const CommentsName = styled.Text`
    font-size: 16px;
    color: #434343;
    margin-left: 10px;
`;
export const CommentsRate = styled.View`
    flex-direction: row;
    margin: 10px 0 0 5px;
    align-items: center;
    justify-content: center;
`;
export const CommentsDate = styled.Text`
    margin-left: 10px;
    color: #434343;
    font-size: 16px;
`;
export const CommentsText = styled.Text`
    font-size: 17px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    color: #434343;
`;


// + View com input e button para add comentários
// + Input de add comentários
export const AddComments = styled.View`
    margin: 25px 0px 25px 0px;
    padding: 10px;
`;
export const Input = styled.TextInput`
    border: 1px solid #434343;
    border-radius: 100px;
    padding: 10px;
    margin-bottom: 20px;
    color: #434343;
    font-size: 16px;
`;
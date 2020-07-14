import styled from 'styled-components/native';

// A margin entre views vai ser 50px Top e Bottom ou sem margin devido ao alinhamento no centro que já da um margin padrão para os 4 lados
// A margin entre texts vai ser 20px Top e Bottom

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFc491;
`;

export const Scroll = styled.ScrollView`

`;


export const SvgView = styled.View`
    align-items: center;
    justify-content: center;
`;


export const ViewWelcome = styled.View`
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;
export const BigText = styled.Text`
    font-weight: bold;
    font-size: 45px;
`;
export const SmallText = styled.Text`
    margin: 10px 20px 0 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
`;


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


export const SignUpView = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    flex-direction: row;
`;
export const SignUpText = styled.Text`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
`;
export const Bold = styled.Text`
    font-weight: bold;
    font-size: 17px;
`;


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


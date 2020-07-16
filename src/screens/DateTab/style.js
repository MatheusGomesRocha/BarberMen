import styled from 'styled-components/native';


// View de toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View que realiza o scroll
export const Scroll = styled.ScrollView``;


// View que contém o SVG
export const SvgView = styled.View`
    justify-content: center;
    align-items: center;
`;


// + View onde fica os textos
// + Texto grande
// + Texto pequeno
export const TextView = styled.View`
    align-items: center;
    justify-content: center;
`;
export const BigText = styled.Text`
    font-weight: bold;
    font-size: 36px;
`;
export const SmallText = styled.Text`
    margin: 10px 20px 0 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
`;

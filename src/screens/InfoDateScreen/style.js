import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View de Scroll
export const Scroll = styled.ScrollView``;


// + View com a info
// + Texto das info
export const InfoView = styled.View`
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 200px;
    justify-content: center;
    margin: 50px 0 25px 0;
`;
export const InfoText = styled.Text`
    padding: 5px;
    font-size: 18px;
`;


// + View do BtnComponent
// + Texto do BtnComponent
export const BtnView = styled.View`
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 999;
`;
export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;
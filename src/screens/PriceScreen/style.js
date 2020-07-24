import styled from 'styled-components/native';

// View de toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View que realiza scroll
export const Scroll = styled.ScrollView`
`;


// View que fica o SVG
export const SvgView = styled.View`
    align-items: center;
    justify-content: center;
`;


// + View onde ficam todos os items 
// + View onde fica 1 item (TEMPORÁRIO. PEGAR DADOS QUE VÃO VIR DO FIREBASE DEPOIS DE SEREM CADASTRADOS PELO O USUÁRIO E PASSAR PARA UM BUTTON)
// + Texto que fica o nome do item 
// + Texto que fica o preço do item
export const TableView = styled.View`
    margin-top: 30px;
    margin-bottom: 100px;
    flex-direction: column;
`
export const ItemView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
`;
export const ItemText = styled.Text`
    margin-left: 5px;
    font-size: 17px;
    width: 70%;
    color: ${props=>props.color};
`;
export const PriceText = styled.Text`
    font-size: 16px;
    color: ${props=>props.color};
    ;
`;

import styled from 'styled-components/native';


// View de toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props=>props.bgColor || '#fff'};
`;


// View que realiza o scroll
export const Scroll = styled.ScrollView``;


// View que contém o SVG
export const SvgView = styled.View`
    justify-content: center;
    align-items: center;
`;

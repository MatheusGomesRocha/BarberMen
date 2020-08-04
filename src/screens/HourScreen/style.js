import styled from 'styled-components/native';


// View Toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props=>props.bgColor || '#fff'};
`;


// View de scroll
export const Scroll = styled.ScrollView``;

export const Flat = styled.FlatList`
    flex-direction: row;
    width: ${props=>props.width};
`;

// View de Svg
export const SvgView = styled.View`
    align-items: center;
    justify-content: center;
`;


// + View com todos os horários
// + View com um horário que percorre o array
// + Texto com os horários
export const HourView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px 0 30px 0;
`;
export const HourItem = styled.View`
    width: ${props=>props.width};
    align-items: center;
    padding: 8px;
`;
export const HourText = styled.Text`
    color: ${props=>props.color || '#333'};
`;
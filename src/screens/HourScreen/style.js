import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const HourView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;
export const HourItem = styled.View`
    width: ${props=>props.width};
    align-items: center;
    padding: 8px;
`;
export const HourText = styled.Text`
    color: ${props=>props.color || '#333'};
`;
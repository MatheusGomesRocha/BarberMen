import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;


export const SvgView = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TextView = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const BigText = styled.Text`
    font-size: 34px;
    font-weight: bold;
`;
export const SmallText = styled.Text`
    margin: 10px 20px 0 20px;
    text-align: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
`;



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
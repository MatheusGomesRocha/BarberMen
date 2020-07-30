import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: ${props=>props.bgColor || '#fff'};
`;


export const Input = styled.TextInput`
    border: 1px solid;
    border-color: ${props=>props.bdColor || '#333'};
    border-radius: 50px;
    width: 90%;
    padding: 10px;
    margin-top: 20px;
    color: ${props=>props.color || '#fff'};
`;


export const DurationView = styled.View`
    width: 100%;
    align-items: center;
`;

export const Texto = styled.Text``;

export const BtnText = styled.Text`
    color: ${props=>props.color || '#fff'};
    font-size: 18px;
`;


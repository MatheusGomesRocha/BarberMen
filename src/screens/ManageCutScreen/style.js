import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: ${props=>props.bgColor || '#fff'};
`;

export const Scroll = styled.ScrollView`
`;

export const Texto = styled.Text`
    color: #434343;
    font-size: 18px;
    margin: 20px 25px 50px 25px;
    text-align: center;
`;

export const Flat = styled.FlatList`
`;

export const DurationView = styled.View`
    width: 100%;
    align-items: center;
`;


export const Input = styled.TextInput`
    border: 1px solid;
    border-color: ${props=>props.bdColor || '#333'};
    border-radius: 50px;
    width: 90%;
    padding: 10px;
    margin-top: 20px;
    color: ${props=>props.color || '#fff'};
    flex-wrap: nowrap;
`;

export const BtnText = styled.Text`
    color: ${props=>props.color || '#fff'};
    font-size: 18px;
`;


export const CutsView = styled.View`
    margin: 100px 0 50px 0;
`;

export const ItemView = styled.View`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
`;
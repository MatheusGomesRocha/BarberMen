import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const HistoryView = styled.View``;

export const ItemView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    borderBottomWidth: 1px;
    borderBottomColor: #434343;
`;

export const LeftView = styled.View`
    flex-direction: column;
`;

export const RightView = styled.View`
    align-items: center;
    justify-content: center;
`;

export const DefaultText = styled.Text`
    font-size: 16px;
`;

export const Bold = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;
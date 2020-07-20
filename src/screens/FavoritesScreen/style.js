import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const FavoritesView = styled.View`

`;
export const FavoritesItem = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.5);
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const FavoritesBtn = styled.TouchableHighlight`
    width: 100%;
    height: 100%;
    justify-content: center;
`;
export const FavoritesText = styled.Text`
    font-size: 20px;
    margin-left: 10px;
`;
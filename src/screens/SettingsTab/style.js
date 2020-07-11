import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const UserView = styled.View`
    background-color: #777;
    height: 180px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export const Texto = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
`;

export const SettingsView = styled.TouchableHighlight`
    width: 100%;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
    flex-direction: column;
`;

export const SettingsButton = styled.TouchableHighlight`
    height: 60px;
    borderTopWidth: 1px;
    borderTopColor: #000;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`;

export const DefaultText = styled.Text`
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 17px;
    margin-left: 10px;
    width: 80%;
`;

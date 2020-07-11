import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const UserView = styled.View`
    background-color: #777;
    height: 150px;
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
    height: 70px;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
    flex-direction: row;
    
`;

export const SettingsButton = styled.TouchableHighlight`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const DefaultText = styled.Text`
    font-size: 20px;
    margin-left: 10px;
    width: 90%;
`;

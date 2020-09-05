import styled from 'styled-components/native';

// A margin entre views vai ser 50px Top e Bottom ou sem margin devido ao alinhamento no centro que já da um margin padrão para os 4 lados
// A margin entre texts vai ser 20px Top e Bottom

//View de toda a tela
export const Container = styled.SafeAreaView`   
    flex: 1;
    background-color: #48CAE4;
`;


//View para realizar scroll
export const Scroll = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;


export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;
export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    width: 60%;
`;
export const HeaderBtn = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const Location = styled.View`
    flex-direction: row;
    align-items: center;
    height: 70px;
    background-color: #fff;
    border-radius: 100px;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #333;
`;
export const LocationBtn = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin: 30px 0 30px 0;
`;
export const ItemArea = styled.View``;
export const ItemText = styled.Text``;
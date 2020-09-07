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


// + Header view
// + Header Título
// + Button de Search no Hearder
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 20px 0 20px;
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


// + Location View
// + Location Input
// + Location button de search
export const Location = styled.View`
    flex-direction: row;
    align-items: center;
    height: 70px;
    background-color: #fff;
    border-radius: 100px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 30px 20px 50px 20px;

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


// FlatList (serve como scroll)
export const Flat = styled.FlatList``;
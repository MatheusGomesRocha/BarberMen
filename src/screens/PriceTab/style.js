import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const LogoView = styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LineIcon = styled.View`
    flex-direction: row;
    margin: 0 5px 0 5px;
`;

export const LogoImg = styled.Image`
    height: 100px;
    width: 100px;
`;

export const ViewImg = styled.View`
    
`;

export const HeaderView = styled.View`
    margin-top: 30px; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HeaderLine = styled.View`
    height: 1px;
    width: 35%;
    background-color: #000;
`;

export const ViewText = styled.View`
    width: 30%;
    justify-content: center;
    align-items: center;
`;

export const HeaderText = styled.Text`
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
`;

export const TableView = styled.View`
    margin-top: 30px;
    flex-direction: column;
`

export const ItemView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    margin-left: 10px;
    justify-content: flex-start;
    align-items: center;
`;


export const ItemText = styled.Text`
    margin-left: 5px;
    font-size: 17px;
`;

export const PriceText = styled.Text`
    font-size: 19px;
    width: 15%;
`;

export const BtnView = styled.View`
    margin-left: 10px;
    width: 40px;
    height: 35px;
`;

export const BtnText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const Touch = styled.TouchableHighlight``;
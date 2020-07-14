import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFc491;
`;

export const Scroll = styled.ScrollView`
`;

export const SvgView = styled.View`
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

export const HeaderText = styled.Text`
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
`;

export const TableView = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
`

export const ItemView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
`;


export const ItemText = styled.Text`
    margin-left: 5px;
    font-size: 17px;
    width: 70%;
    color: #fff;
`;


export const BtnView = styled.View`
    margin-left: 10px;
    width: 40px;
    height: 35px;
`;

export const PriceText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const Touch = styled.TouchableHighlight``;

export const ViewText = styled.View`
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;

export const BigText = styled.Text`
    font-weight: bold;
    font-size: 34px;
    text-align: center;
`;

export const SmallText = styled.Text`
    margin: 10px 20px 0 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
`;
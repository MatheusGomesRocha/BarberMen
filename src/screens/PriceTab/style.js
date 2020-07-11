import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

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


import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

export const TextView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BigText = styled.Text`
    font-size: 34px;
    font-weight: bold;
    text-align: center;
`;
export const SmallText = styled.Text`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin: 10px 20px 0 20px;
`;


export const InfoView = styled.View`
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const InfoText = styled.Text`
    padding: 10px;
    font-size: 18px;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-size: 16px;
`
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const BannerView = styled.View`
`;

export const BannerImg = styled.Image`
    width: 100%;
    height: 250px;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    align-items: center; 
    justify-content: center;
    width: 100%;
    height: 60px;
`;

export const LineView = styled.View`
    margin-top: 10px;
    height: 1px;
    background-color: #000;
    width: 25%;
`;

export const TextView = styled.View`
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 50%;
    align-items: center;
`;


export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const UsView = styled.View`
`;

export const UsText = styled.Text`  
    color: #555;
    font-size: 16px;
    text-align: center;
    margin: 20px 15px 20px 15px;    
`; //      TOP  RIGHT BOTTOM LEFT

export const UsImg = styled.Image`
    margin: 5px 0 25px 0;
    width: 100%;
    height: 200px;
`;

export const CommentsView = styled.View`
    width: 100%;
    height: 300px;
    background-color: #ccc;
    margin-top: 25px;
`;

export const CommentsText = styled.Text`
    font-size: 24px;
`;

export const LineText = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const FakeSwiper = styled.View`
    height: 200px;
    background-color: #48CAE4;
`;

export const Body = styled.View`
    background-color: #fff;
    borderTopLeftRadius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin: 0 20px 0 30px;
    border-width: 4px;
    border-color: #fff;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserName = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserFavBtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;




export const ServicesArea = styled.View`
    margin-top: 30px;
`;

export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #48CAE4;
    margin: 0 0 20px 30px;
`;

export const ServicesItem = styled.View`
    flex-direction: row;
    margin: 0 30px 20px 30px;
`;
export const ServicesInfo = styled.View`
    flex: 1;
`;


export const ServicesName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #48CAE4;
`;
export const ServicesPrice = styled.Text`
    font-size: 14px;
    color: #48CAE4;
`;

export const ServicesBtn = styled.TouchableOpacity`
    background-color: #48CAE4;
    border-radius: 10px;
    padding: 10px 15px;
`;
export const ServicesBtnText = styled.Text`
    font-weight: bold;
    color: #fff;
`;



export const CommentsArea = styled.View`
    margin: 50px 0 50px 0;
`;

export const CommentsItem = styled.View`
    background-color: #0096C7;
    padding: 10px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin: 0 50px 0 50px;
`;
export const CommentsInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;
export const CommentsName = styled.Text`
    color: #fff;
    font-weight: bold;
`;
export const CommentsBody = styled.Text`
    color: #fff;
    font-size: 13px;
`;

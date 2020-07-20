import styled from 'styled-components/native';



export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;



export const Scroll = styled.ScrollView``;



export const AllView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const WorkerView = styled.View`
    height: 200px;
    width: 50%;
`;
export const WorkerImg = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 100px;
`;
export const WorkerName = styled.Text`
    font-size: 16px;
    color: #333;
`;
export const WorkerDescription = styled.Text`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
`;
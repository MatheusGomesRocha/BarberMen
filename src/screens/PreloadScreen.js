import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;    
`;
const LoadingIcon = styled.ActivityIndicator`

`;
const Texto = styled.Text`
    font-size: 34px;
`
const Btn = styled.Button``;
const Img = styled.Image`
    width: 200px;
    height: 200px;
`;

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [
                    { name: 'app' },
                ]
            });
        }, 5000)
    }, [])
    
    
    return(
        <Container>
            <Img source={require('../assets/img/logo.png')} />
            <Texto> BarberMen </Texto>
            <LoadingIcon size="large" color="#333" />
        </Container>
    );
}
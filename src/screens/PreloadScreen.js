import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props=>props.bgColor || '#fff'};
    justify-content: center;
    align-items: center;    
`;
const LoadingIcon = styled.ActivityIndicator`

`;
const Texto = styled.Text`
    font-size: 34px;
    color: ${props=>props.color || '#333'};
`
const Btn = styled.Button``;
const Img = styled.Image`
    width: 200px;
    height: 200px;
`;

export default () => {
    const navigation = useNavigation();
    const dark = useSelector(state=>state.user.dark);

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
    
    let bg = '#fff';
    let color = '#333';
    if(dark) {
        bg = '#333';
        color = '#fff';
    }

    return(
        <Container bgColor={bg}>
            <Img source={require('../assets/img/logo.png')} />
            <Texto color={color}> BarberMen </Texto>
            <LoadingIcon size="large" color={color} />
        </Container>
    );
}
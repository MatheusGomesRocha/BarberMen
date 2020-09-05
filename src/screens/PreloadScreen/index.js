import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SvgBarber from '../../assets/svg/undraw_barber_3uel.svg';     // SVG BARBER
import auth from '@react-native-firebase/auth';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #48CAE4;
    justify-content: center;
    align-items: center;    
`;
const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export default () => {
    const navigation = useNavigation();
    const user = auth().currentUser;
    const userEmail = useSelector(state=>state.user.email);

    useEffect(() => {

        if(user && userEmail) {
            setTimeout(() => {
                navigation.reset({
                    routes: [
                        { name: 'apptab' },
                    ]
                });
            }, 2000)

    } else {
            setTimeout(() => {
                navigation.reset({
                    routes: [
                        { name: 'login' },
                    ]
                });
            }, 2000)
        
    }
}, [])
    
    return(
        <Container>
            <SvgBarber width="100%" height="160px" />
            <LoadingIcon size="large" color="#fff"/>
        </Container>
    );
}
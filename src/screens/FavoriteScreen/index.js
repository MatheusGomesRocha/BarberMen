import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BarberItem from '../../components/BarberItem';
import BarberList from '../../lists/BarberList';
import Api from '../../Api';

import {
    Container,

    Flat
} from './style';

export default () => {
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(false);

    const userInfo = auth().currentUser;

    useEffect(() => {
        const getBarbers = async () => {
            setLoading(true);
            setBarbers([]);
            
            let json = await Api.getBarbers();
    
            setBarbers(json);
            setLoading(false);
        }
        
        getBarbers();
    }, [])

    
    return(
        <Container>
            <Flat
                data={barbers}
                renderItem={({item}) => <BarberList data={item} />}
            />
        </Container>
    );
}
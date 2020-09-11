import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BarberItem from '../../components/BarberItem';
import BarberList from '../../lists/BarberList';
import { RefreshControl } from 'react-native';
import Api from '../../Api';

import {
    Container,

    Flat,

    Input,
} from './style';

export default () => {
    const [barbers, setBarbers] = useState([]);
    const [userSearch, setUserSearch] = useState();

    const userInfo = auth().currentUser;

    useEffect(() => {
        const getBarbers = async () => {
            setBarbers([]);
            
            let json = await Api.getBarbers();

            setBarbers(json)
        }

        getBarbers();
    }, [])

    const filterData = barbers.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        return item.name.indexOf(userSearch) >=0
    }) 

    return(
        <Container>
            
            <Flat
                ListHeaderComponent={
                    <>
                        <Input placeholder="Digite o nome do barbeiro" placeholderTextColor="#fff" onChangeText={us=>setUserSearch(us)} />
                    </>
                    }
                data={userSearch ? filterData : barbers}
                renderItem={({item}) => <BarberList data={item} />}
            />        
        </Container>
    );
}
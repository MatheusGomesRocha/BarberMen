import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BarberItem from '../../components/BarberItem';

import {
    Container,

    Scroll,

    Input,
    
    ListArea,
} from './style';

export default () => {
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userSearch, setUserSearch] = useState();

    const userInfo = auth().currentUser;

    const getBarbers = async () => {
        setLoading(true);
        setBarbers([]);
        
            firestore()
            .collection('barbers')
            .onSnapshot(querySnapshot => {
            const barbersFire = [];

            querySnapshot.forEach(documentSnapshot => {
                barbersFire.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setBarbers(barbersFire);
            setLoading(false);
          });
    }

    useEffect(() => {
        getBarbers();
    }, [])

    const filterData = barbers.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        return item.name.indexOf(userSearch) >=0
    }) 

    return(
        <Container>
            <Scroll>
                <Input placeholder="Digite o nome do barbeiro" placeholderTextColor="#fff" onChangeText={us=>setUserSearch(us)} />
                <ListArea>
                    {filterData.map((item, k) => (
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroll>
        </Container>
    );
}
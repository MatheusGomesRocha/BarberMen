import React, {useState, useEffect, useLayoutEffect} from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgBarber from '../../assets/svg/home.svg';     // SVG BARBER
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SearchIcon from '../../assets/svg/search.svg'
import LocationIcon from '../../assets/svg/my_location.svg'
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem';

import {
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,      // Toda a tela

    Scroll,         // View pra realizar Scroll da tela

    Header,
    HeaderTitle,
    HeaderBtn,

    Location,
    LocationInput,
    LocationBtn,

    LoadingIcon,

    ListArea,
    ItemArea,
    ItemText,
} from './style';


export default () => {
    const navigation = useNavigation();

    const [location, setLocation] = useState();
    const [coord, setCoord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [barbers, setBarbers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
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
            setLocation('Fortaleza')
            setLoading(false);
          });
        
    }

    useEffect(() => {
            getBarbers();
    }, [])

    const onRefresh = () => {
        setRefresh(false);
        getBarbers();
    }

    return (
        <Container>
            <Scroll refreshControl={
                <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }>
            
                <Header>
                    <HeaderTitle numberOfLines={2}>Procure por um barbeiro </HeaderTitle>
                    <HeaderBtn onPress={() => navigation.navigate('search')}>
                        <SearchIcon width="26" height="26" fill="#fff" />
                    </HeaderBtn>
                </Header>

                <Location>
                    <LocationInput editable={false} onEndEditing={() => alert('olá mundo')} value={location} onChangeText={(l=>setLocation(l))} placeholder="Onde você está?" placeholderTextColor="#aaa" />
                    <LocationBtn onPress={() => alert('olá mundo')}>
                        <LocationIcon width="24" height="24" fill="#333" />
                    </LocationBtn>
                </Location>

                {loading && 
                    <LoadingIcon size="large" color="#fff" />
                }

                <ListArea>
                    {barbers.map((b, k) => (
                        <BarberItem key={k} data={b} />
                    ))}
                </ListArea>

            </Scroll>
        </Container>
    );
}

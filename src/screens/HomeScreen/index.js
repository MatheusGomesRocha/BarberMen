import React, {useState, useEffect} from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import SearchIcon from '../../assets/svg/search.svg'
import LocationIcon from '../../assets/svg/my_location.svg'
import BarberItem from '../../components/BarberItem';
import BarberList from '../../lists/BarberList';
import Api from "../../Api";
import { FlatList } from 'react-native';

import {
    Container,      // Toda a tela

    Flat,           // FlatList (serve como scroll)

    Header,         // Header view
    HeaderTitle,    // Header Título
    HeaderBtn,      // Button de Search no Hearder

    Location,       // Location View
    LocationInput,  // Location Input
    LocationBtn,    // Location button de search
} from './style';


export default () => {
    const navigation = useNavigation();

    const [location, setLocation] = useState();     // Location
    const [barbers, setBarbers] = useState([]);
   
    useEffect(() => {       // Ao carregar a página executa a função de pegar a lista
        const getBarbers = async () => {        // Função que pega a lista de barbeiros do Firebase e seta em um array
            setBarbers([]);
            
            
            let json = await Api.getBarbers();
    
            setBarbers(json)
            setLocation('Fortaleza')
        }
        
        getBarbers();
    }, [])

    return (
        <Container>
            <Flat
                ListHeaderComponent={
                    <>
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
                    </>
                    }
                data={barbers}
                renderItem={({item}) => <BarberList data={item} />}
            />

        </Container>
    );
}

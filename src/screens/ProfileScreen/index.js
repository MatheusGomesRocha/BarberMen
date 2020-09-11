import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../../Api';
import {FlatList} from 'react-native';
import EditProfileList from '../../lists/EditProfileList';
import {
    Container,      // View toda a tela
    
    Flat,           // Flatlist
} from './style';


export default () => {
    const navigation = useNavigation();

    const [userArray, setUserArray] = useState([]);

    const userInfo = auth().currentUser;

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
        const getUser = async () => {
            let json = await Api.getUserLogin(userInfo.uid);
            setUserArray(json);
        }
        
        getUser();
    }, [])

    return (
        <Container>  
            <Flat 
                
                data={userArray}
                renderItem={({item}) => <EditProfileList data={item} />}
            
                keyExtractor={(item) => item.id.toString()}
                style={{width: '100%'}}

            />
        </Container>
    );
}
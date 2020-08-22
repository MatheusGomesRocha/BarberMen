import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderButton,
} from '../../components/HeaderComponent';

import {
    Container,      // View toda a tela
    
    Scroll,         // View que realiza o Scroll

    PicView,        // View de profile image
    Img,            // Image
    Texto,          // Texto do Button para trocar a foto

    InputView,      // View do Input
    Input,          // O input

    BtnView,        // View do Button de salvar
    BtnText         // Texto do Button de salvar
} from './style';


export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [pass, setPass] = useState('');

    const [newEmail, setNewEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newPass, setNewPass] = useState('');

    const userInfo = auth().currentUser;

    function ImageAvatar(data) {
        if(data.didCancel) {
            return;
        }

        if(data.error) {
            return;
        }

        if(!data.uri) {
            return;
        }

        setAvatar(data);
    }

    async function UploadImage() {
        const data = new FormData();

        data.append('avatar', {

        })

        await Axios.post('http://localhost:3030/files', {

        })
    }

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
        firestore()
        .collection('users')
        .where('id', '==', userInfo.uid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                setEmail(documentSnapshot.data().email);
                setName(documentSnapshot.data().name);
                setAvatar(documentSnapshot.data().avatar);
                setPass(documentSnapshot.data().password);
            });
        });
    }, [])

    
    function UpdateData() {     // Função que realiza o update das infos do usuário
        if(avatar || newName || newEmail || newPass) {      // Verifica se tem algum desses preenchido
            
            // Cria novas variáveis
            let nameFire = '';    
            let emailFire = '';
            let passFire = '';

            // Caso newName esteja preenchido, recebe o que o usuário digitou, senão, recebe o nome do usuário logado
            // É desse jeito com os 2 abaixo
            if(newName) {
                nameFire = newName;
            } else {
                nameFire = name;
            }

            if(newEmail) {
                emailFire = newEmail;
            } else {
                emailFire = email;
            }

            if(newPass) {
                passFire = newPass;
            } else {
                passFire = pass;
            }

            firestore()     // Realiza o update 
            .collection('users')
            .doc(userInfo.uid)
            .update({
                avatar: avatar,
                name: nameFire,
                email: emailFire,
                pass: passFire,                    
            })
            .then(() => {
                alert('Usuário editado');
            });
        } else {
            alert('Você não digitiou nada');
        }
        
    }
   
    return (
        <Container>  

            <Header>
                <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                    <HeaderLeft>  <Icon name="angle-left" size={22} />  Editar Perfil </HeaderLeft>
                </HeaderButton>
            </Header>  

                <Scroll>

                    <PicView>
                        <Img source={
                            avatar ? avatar 
                            : require('../../assets/img/perfil1.jpg') 
                        } />
                        <BtnComponent onPress={() => ImagePicker.showImagePicker({}, ImageAvatar)} bgColor="#E76F51" width="50%" height="40px" mTop="20px" radius="20px">
                            <BtnText> Trocar </BtnText>
                        </BtnComponent>
                    </PicView>

                    <Input onChangeText={n=>setNewName(n)} placeholder={name} />
                    <Input onChangeText={e=>setNewEmail(e)} placeholder={email} />
                    <Input onChangeText={p=>setNewPass(p)} placeholder={pass} />
    
                    <BtnView>
                        <BtnComponent onPress={UpdateData} width="80%" radius="100px" height="50px" bgColor="#E76F51">
                            <BtnText> Salvar </BtnText> 
                        </BtnComponent>
                    </BtnView>

                </Scroll>
        </Container>
    );
}
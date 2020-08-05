import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import BtnComponent from '../../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

import {
    Container,      // View toda a tela
    
    Scroll,         // View que realiza o Scroll

    PicView,        // View de profile picture
    Img,
    Texto,          // Texto do Button para trocar a foto

    InputView,      // View do Input
    Input,          // O input

    BtnView,        // View do Button de salvar
    BtnText         // Texto do Button de salvar
} from './style';


export default () => {
    const userInfo = auth().currentUser;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [pass, setPass] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newName, setNewName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const dark = useSelector(state=>state.user.dark);

    const navigation = useNavigation();

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

    useEffect(() => {
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

    
    function UpdateData() {
        if(avatar || newName || newEmail || newPass) {
            let nameFire = '';
            let emailFire = '';
            let passFire = '';

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

            firestore()
            .collection('users')
            .doc(userInfo.uid)
            .update({
                avatar: avatar,
                name: nameFire,
                email: emailFire,
                pass: passFire,                    
            })
            .then(() => {
                navigation.reset({
                    routes: [
                        { name: 'profile' },
                    ]
                })
                alert('Usuário editado');
            });
        } else {
            alert('Você não digitiou nada');
        }
        
    }
        
    let bg = "#fff";
    let color = "#333";
    let placeColor = 'rgba(0, 0, 0, 0.5)';
    if(dark) {
        bg = "#333";                                // Cor para backgrounds e texto de buttons
        color = "#fff";                             // Cor para textos e bordas do input
        placeColor = 'rgba(255, 255, 255, 0.5)';    // Cor para placeholder
    }
    
    return (
        <Container bgColor={bg}>                
                <Scroll>

                    <PicView>
                        <Img source={
                            avatar ? avatar 
                            : require('../../assets/img/perfil1.jpg') 
                        } />
                        <BtnComponent onPress={() => ImagePicker.showImagePicker({}, ImageAvatar)} bgColor={color} width="50%" height="40px" mTop="20px" radius="20px">
                            <Texto color={bg}> Editar imagem </Texto>
                        </BtnComponent>
                    </PicView>

                    <InputView>
                        <Input onChangeText={n=>setNewName(n)} color={color} bdColor={color} placeholderTextColor={placeColor} placeholder={name} />
                    </InputView>
                    <InputView>
                        <Input onChangeText={e=>setNewEmail(e)} color={color} bdColor={color} placeholderTextColor={placeColor} placeholder={email} />
                    </InputView>
                    <InputView>
                        <Input onChangeText={p=>setNewPass(p)} color={color} bdColor={color} placeholderTextColor={placeColor} placeholder={pass} />
                    </InputView>
                
                    <BtnView>
                        <BtnComponent onPress={UpdateData} width="80%" radius="100px" height="50px" bgColor={color}>
                            <BtnText color={bg}> Salvar </BtnText> 
                        </BtnComponent>
                    </BtnView>

                </Scroll>
        </Container>
    );
}
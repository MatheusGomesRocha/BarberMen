import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import BtnComponent from '../../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,      // View toda a tela
    
    Scroll,         // View que realiza o Scroll

    PicView,        // View de profile picture
    Texto,          // Texto do Button para trocar a foto

    InputView,      // View do Input
    Input,          // O input

    BtnView,        // View do Button de salvar
    BtnText         // Texto do Button de salvar
} from './style';


export default () => {
    const userInfo = auth().currentUser;
    const [email, setEmail] = useState('');
    const dark = useSelector(state=>state.user.dark);

    useEffect(() => {
        firestore()
        .collection('users')
        .where('id', '==', userInfo.uid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                setEmail(documentSnapshot.data().email);
            });
        });
    }, [])
        
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
                        <Svg width={100} height={100} />
                        <BtnComponent bgColor={color} width="50%" height="40px" mTop="20px" radius="20px">
                            <Texto color={bg}> Editar imagem </Texto>
                        </BtnComponent>
                    </PicView>

                    <InputView>
                        <Input bdColor={color} placeholderTextColor={placeColor} placeholder="Teste" />
                    </InputView>
                    <InputView>
                        <Input bdColor={color} placeholderTextColor={placeColor} placeholder={email} />
                    </InputView>
                    <InputView>
                        <Input bdColor={color} placeholderTextColor={placeColor} placeholder="****" />
                    </InputView>
                
                    <BtnView>
                        <BtnComponent width="80%" radius="100px" height="50px" bgColor={color}>
                            <BtnText color={bg}> Salvar </BtnText> 
                        </BtnComponent>
                    </BtnView>

                </Scroll>
        </Container>
    );
}
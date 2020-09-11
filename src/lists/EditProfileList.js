import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import BtnComponent from '../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import Api from '../Api';
import PrevIcon from '../assets/svg/nav_prev.svg';
import {useNavigation} from '@react-navigation/native';

const Div = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

`;

// Image
const Img = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-top: 100px;

`;

// Input
const Input = styled.TextInput`
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    height: 60px;
    background-color: #fff;
    width: 80%;
    margin-top: 10px;
`;


// + View do Button de salvar
// + Texto do Button de salvar
const BtnView = styled.View`
    margin: 20px 0 30px 0;
`;
const BtnText = styled.Text`
    color: #fff; 
    font-size: 18px;
`;

const BtnPrev = styled.TouchableOpacity`
    position: absolute;
    top: 5px;
    left: 25px;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export default ({data}) => {
    const navigation = useNavigation();

    const [userArray, setUserArray] = useState([]);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [pass, setPass] = useState('');

    const [newEmail, setNewEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newPass, setNewPass] = useState('');

    const userInfo = auth().currentUser;

    const UpdateData = () => {     // Função que realiza o update das infos do usuário
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

            let res = Api.updateProfile(userInfo.uid, nameFire, emailFire, passFire);

            setName(nameFire);
            setEmail(emailFire);
            setPass(passFire);
        } else {
            alert('Você não digitiou nada');
        }
    }

    useEffect(() => {       // Pega os dados na collection "users" do usuário logado, e setar em uma state, Email, Name, Avatar e Password
        const getUser = async () => {
            let json = await Api.getUserLogin(userInfo.uid);
            setUserArray(json);
        }

        setName(data.name);
        setEmail(data.email);
        getUser();
    }, [])


    return(
        <Div>
            <BtnPrev onPress={() => navigation.goBack()}>
                <PrevIcon width="35" height="35" fill="#fff"/>
            </BtnPrev>

            <Img source={require('../assets/img/perfil1.jpg')} />
            <BtnComponent style={{marginBottom: 10}} bgColor="#0096C7" width="50%" height="50px" mTop="20px" radius="10px">
                <BtnText> Trocar </BtnText>
            </BtnComponent>

            <Input onChangeText={n=>setNewName(n)} placeholder={name} />
            <Input keyboardType="email-address" onChangeText={e=>setNewEmail(e)} placeholder={email} />
            <Input secureTextEntry={true} onChangeText={p=>setNewPass(p)} placeholder="******" />

            <BtnComponent underlayColor="#0096C790" onPress={UpdateData} mTop="10px" width="80%" radius="10px" height="60px" bgColor="#0096C7">
                <BtnText> Salvar </BtnText> 
            </BtnComponent>
        </Div>
    );
}
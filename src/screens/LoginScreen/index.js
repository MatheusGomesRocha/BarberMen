import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_barber_3uel.svg';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';

import {
    Container,  // View toda a tela 

    Input,      // Input
    
    BtnText,    // Texto do Button e Forgot

    RegisterView,   // View com texto para realizar cadastro
    RegisterText,   // Texto do cadastro
    RegisterBtn,    // Botão para ir para o cadastro
} from './style';

function LoginScreen(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const SignIn = async (e, p) => {
        if(!e || !p) {
            alert('Todos campos são obrigatórios');
        } else {
            let json = await Api.login(e, p);
            
            if(json) {
                props.setEmail(e);
                navigation.reset({
                    routes: [
                        {name: 'preload'}
                    ]
                });
            }
        }   
    }

    return (
        <Container>
                <Svg width="100%" height="150px" style={{marginBottom: 50}}/>
                
                <Input keyboardType="email-address" onChangeText={e=>setEmail(e)} placeholderTextColor="rgba(0, 0, 0, 0.5)" placeholder="Email"/>
                <Input onEndEditing={() => SignIn(email, pass)}  secureTextEntry={true} onChangeText={p=>setPass(p)} placeholderTextColor="rgba(0, 0, 0, 0.5)" placeholder="Senha"/>

                <BtnComponent underlayColor="rgba(0, 0, 0, 0.7)" onPress={() => SignIn(email, pass)} mTop="10px" width="80%" radius="10px" height="60px" bgColor="#0096C7">
                    <BtnText> LOGIN </BtnText>
                </BtnComponent>

                    <RegisterBtn onPress={() => navigation.navigate('signup')}>
                        <RegisterText> Não possui uma conta? </RegisterText>
                        <RegisterText style={{fontWeight: 'bold', color: '#fff'}}> Cadastre-se </RegisterText>
                    </RegisterBtn>
            
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})    // Seta o email do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (LoginScreen);
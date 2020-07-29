import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, connect, useSelector} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Login 
    BigText,    // Texto Login grande

    ViewLogin,  // View com o form de login

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar login
    BtnText,    // Texto do Button e Forgot
} from './style';

function LoginScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.user.email);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function SignIn(e, p) {
        if(e, p) {
            const login = 
                auth()
                .signInWithEmailAndPassword(e, p)
                .then(() => {
                    props.setEmail(e);
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: 'home' },
                        ]
                    });
                    alert('Logado com sucesso');
                })
                .catch(error => {
                    if (error) {
                        alert('Email ou senha incorreta');
                    }
                });
        } else  {
            alert('Todos campos são obrigatórios');
        }
        
           
    }

    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Login </BigText>
            </TextView>
            
            <ViewLogin>
                
                    <InputView>
                        <Input keyboardType="email-address" onChangeText={e=>setEmail(e)} placeholderTextColor="rgba(0, 0, 0, 0.5)" placeholder="Email"/>
                    </InputView>
                    <InputView>
                        <Input onChangeText={p=>setPass(p)} placeholderTextColor="rgba(0, 0, 0, 0.5)" placeholder="Senha"/>
                    </InputView>

                    <BtnView>
                        <BtnComponent underlayColor="#000" onPress={() => SignIn(email, pass)} width="80%" radius="100px" height="55px" bgColor="#333">
                            <BtnText> Login </BtnText>
                        </BtnComponent>
                        <BtnText style={{color:"#333", marginTop:10, marginBottom: 25}}> Esqueceu a senha? </BtnText>

                    </BtnView>

            </ViewLogin>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})
    };
}

export default connect(null, mapDispatchToProps) (LoginScreen);
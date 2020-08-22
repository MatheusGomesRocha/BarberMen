import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/user_pic.svg';
import auth from '@react-native-firebase/auth';

import {
    TextView,    // View de bem-vindo
    BigText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,  // View toda a tela 

    Scroll,     // Permite a rolagem da tela

    ViewLogin,  // View com o form de login

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar login
    BtnText,    // Texto do Button e Forgot
} from './style';

function LoginScreen(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function SignIn(e, p) {
        if(!e, !p) {
            alert('Todos campos são obrigatórios');
        } else  {
            const login = 
                auth()
                .signInWithEmailAndPassword(e, p)
                .then(() => {
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: 'home' },
                        ]
                    });
                    props.setEmail(e);
                    alert('Logado com sucesso');
                })
                .catch(error => {
                    if (error) {
                        alert('Email ou senha incorreta');
                    }
                });
        }   
    }

    return (
        <Container>
            <Scroll>
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
                            <BtnComponent underlayColor="#000" onPress={() => SignIn(email, pass)} width="80%" radius="100px" height="55px" bgColor="#E76F51">
                                <BtnText> Login </BtnText>
                            </BtnComponent>
                            <BtnText style={{color:"#333", marginTop:10, marginBottom: 25}}> Esqueceu a senha? </BtnText>

                        </BtnView>

                </ViewLogin>
            </Scroll>
            
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})    // Seta o email do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (LoginScreen);
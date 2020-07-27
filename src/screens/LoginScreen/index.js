import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, connect, useSelector} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import auth from '@react-native-firebase/auth';

import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Login 
    BigText,    // Texto Login grande

    ViewLogin,  // View com o form de login

    Scroll,     // Só irá realizar scroll dentro dessa view acima

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
                <Scroll>
                    <InputView>
                        <Input keyboardType="email-address" onChangeText={e=>setEmail(e)} underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Email"/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" onChangeText={p=>setPass(p)} placeholderTextColor="rgba(255, 255, 255, 0.5)" placeholder="Senha"/>
                    </InputView>

                    <BtnView>
                        <BtnComponent underlayColor="#ddd" onPress={() => SignIn(email, pass)} width="80%" radius="100px" height="55px" bgColor="#fff">
                            <BtnText> Login </BtnText>
                        </BtnComponent>
                        <BtnText style={{color:"#fff", marginTop:20, marginBottom: 25}}> Esqueceu a senha? </BtnText>

                    </BtnView>

                </Scroll>
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
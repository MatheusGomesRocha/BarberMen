import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_barber_3uel.svg';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Api from '../../Api';

import {
    Container,  // View toda a tela 

    Scroll,     // Só irá realizar scroll dentro dessa view acima
    
    TextView,   // View com svg e texto de Cadastro 
    BigText,    // Texto Cadastro grande

    ViewSignUp,  // View com o form de cadastro

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar cadastro
    BtnText,    // Texto do Button e Arraste
} from './style';

function SignUpScreen(props) {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function SignUp  (e, p) {       // Função de cadastro
        // Todos os dados precisam estar preenchidos e as senhas teêm que coincidir para que funcione
        if(!name || !email || !password || !confirmPassword) {
            alert('Todos os campos são obrigatiórios')
        } else if(password != confirmPassword) {
            alert('As senhas devem coincidir');
        } 
        else {
            let res = Api.signUp(name, e, p, navigation);
        }
    }

    return (
        <Container>
            <Scroll>
                <TextView>
                        <Svg width="200px" height="150px" />
                        <BigText> Cadastro </BigText>
                </TextView>
            

                <ViewSignUp>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Nome" onChangeText={n=>setName(n)}/>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Email" keyboardType="email-address" onChangeText={e=>setEmail(e)}/>
                        <Input secureTextEntry={true} placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Senha" onChangeText={p=>setPassword(p)}/>
                        <Input secureTextEntry={true} placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Confirme a Senha" onChangeText={cp=>setConfirmPassword(cp)}/>

                        <BtnComponent underlayColor="rgba(0, 0, 0, 0.6)" onPress={() => SignUp(email, password)} mTop="10px" width="80%" radius="10px" height="60px" bgColor="#0096C7">
                            <BtnText> Finalizar </BtnText>
                        </BtnComponent>
                </ViewSignUp>

            </Scroll>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})        // Seta o email no redux
    };
}

export default connect(null, mapDispatchToProps) (SignUpScreen);
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/undraw_profile_pic_ic5t.svg';
import auth from '@react-native-firebase/auth';

import {
    Container,  // View toda a tela 

    TextView,   // View com svg e texto de Cadastro 
    BigText,    // Texto Cadastro grande

    ViewSignUp,  // View com o form de cadastro

    Scroll,     // Só irá realizar scroll dentro dessa view acima

    InputView,  // View de um input
    Input,      // Input
    
    BtnView,    // View de Button de realizar cadastro
    BtnText,    // Texto do Button e Arraste
} from './style';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function SignUp  (e, p) {
        if(!name || !email || !cpf || !contact || !password || !confirmPassword) {
            alert('Todos os campos são obrigatiórios')
        } else if(password != confirmPassword) {
            alert('As senhas devem coincidir');
        } 
        else {
            auth()
            .createUserWithEmailAndPassword(e, p)
            .then(() => {
                alert('Conta criada com sucesso');
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'home' },
                    ]
                });
            })
            .catch(error => {
                if(error.code == 'auth/email-already-in-use') {
                    alert('Este email já está cadastro, tente outro');
                }
            })
            
        }
             
     
    }

    return (
        <Container>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Cadastro </BigText>
            </TextView>
            
            <ViewSignUp>
                <BtnText style={{color: '#fff', textAlign: 'center', marginTop: 5}}> Arraste para cima </BtnText> 

                <Scroll>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Nome" onChangeText={n=>setName(n)}/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Email" keyboardType="email-address" onChangeText={e=>setEmail(e)}/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="CPF" keyboardType="numeric" onChangeText={c=>setCpf(c)}/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Contato" keyboardType="numeric" onChangeText={co=>setContact(co)}/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Senha" onChangeText={p=>setPassword(p)}/>
                    </InputView>
                    <InputView>
                        <Input underlineColorAndroid="#fff" placeholderTextColor="rgba(255, 255, 255, 0.5)" 
                        placeholder="Confirme a Senha" onChangeText={cp=>setConfirmPassword(cp)}/>
                    </InputView>

                    <BtnView>
                        <BtnComponent onPress={() => SignUp(email, password)} width="80%" radius="100px" height="55px" bgColor="#fff">
                            <BtnText> Finalizar </BtnText>
                        </BtnComponent>
                    </BtnView>

                </Scroll>
            </ViewSignUp>
        </Container>
    );
}
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import BtnComponent from '../../components/BtnComponent';
import Svg from '../../assets/svg/user_pic.svg';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
        if(!name || !email || !contact || !password || !confirmPassword) {
            alert('Todos os campos são obrigatiórios')
        } else if(password != confirmPassword) {
            alert('As senhas devem coincidir');
        } 
        else {
            auth()      // Cria um usuário com email e senha no firebase Auth
            .createUserWithEmailAndPassword(e, p)   
            .then(() => {       
                auth()
                .signInWithEmailAndPassword(e, p);  // Depois de criar no Auth é feito o login
                props.setEmail(e);                  // O email do usuário é setado com redux
                const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)
                firestore()                         // Seta os dados preenchidos em uma collection "users" no firestore
                .collection('users')
                .doc(user.uid)                      // O doc que é a identificação do Documento, irá receber o uid(ID) do usuário
                .set({
                    id: user.uid,
                    name: name,
                    email: user.email,
                    phone: contact,
                    password: password,
                })
                alert('Conta criada e logada com sucesso');
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'home' },
                    ]
                });
            })
            .catch(error => {
                if(error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
                    alert('Este email já está cadastro, tente outro');
                }
            })
            
        }
             
     
    }

    return (
        <Container>
            <Scroll>
            <TextView>
                    <Svg width="150px" height="100px" />
                    <BigText> Cadastro </BigText>
            </TextView>
            
            <ViewSignUp>
                <BtnText style={{color: '#fff', textAlign: 'center', marginTop: 5}}> Arraste para cima </BtnText> 

                
                    <InputView>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Nome" onChangeText={n=>setName(n)}/>
                    </InputView>
                    <InputView>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Email" keyboardType="email-address" onChangeText={e=>setEmail(e)}/>
                    </InputView>
                    <InputView>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Contato" keyboardType="numeric" onChangeText={co=>setContact(co)}/>
                    </InputView>
                    <InputView>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Senha" onChangeText={p=>setPassword(p)}/>
                    </InputView>
                    <InputView>
                        <Input placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                        placeholder="Confirme a Senha" onChangeText={cp=>setConfirmPassword(cp)}/>
                    </InputView>

                    <BtnView>
                        <BtnComponent onPress={() => SignUp(email, password)} width="100%" radius="100px" height="55px" bgColor="#E76F51">
                            <BtnText> Finalizar </BtnText>
                        </BtnComponent>
                    </BtnView>

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
import React, {useState, useEffect, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgBarber from '../../assets/svg/undraw_barber_3uel.svg';     // SVG BARBER
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {View} from 'react-native';
import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,      // Toda a tela

    Scroll,         // View pra realizar Scroll da tela

    SvgView,        // View que ficou o SVG

    LoginBtnView,   // View com botão de login
    BtnText,        // Texto dentro do button

    CommentsTitle,  // View onde fica todo o título da sessão de comentários
    TitleText,      // Texto com o título da sessão de comentários

    CommentsView,   // View com todos os comentários em um array
    Comments,       // View dentro do array que retorna para cada comentário
    CommentsHeader, // View com avatar e nome do usuário
    CommentsAvatar, // Imagem do avatar 
    CommentsName,   // Texto do nome
    CommentsRate,   // View com estrelas mostrando o rating e a data do comentário
    CommentsDate,   // Text com a data do comentário
    CommentsText,   // Texto da sessão de comentários

    AddComments,    // View com input e button para add comentários
    Input,          // Input de add comentários
} from './style';


export default () => {
const navigation = useNavigation();
const dark = useSelector(state => state.user.dark);
const user = useSelector(state => state.user.email);
const userInfo = auth().currentUser;
const [userName, setUserName] = useState(''); 
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');

let day = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear()
let today = day+'/'+month+'/'+year;
useEffect(() => {
    if(user) {
        firestore()
        .collection('users')
        .where('id', '==', userInfo.uid)
        .get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                setUserName(documentSnapshot.data().name);
            })
        })
    }
}, [])

useEffect(() => {
    const subscriber = firestore()
    .collection('comments')
    .onSnapshot(querySnapshot => {
      const commentArray = [];

      querySnapshot.forEach(documentSnapshot => {
          commentArray.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
          });
      });

      setComments(commentArray);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, [])
   
function AddComment() {
    if(user) {
        if(newComment) {
            firestore()
            .collection('comments')
            .add({
                userId: userInfo.uid,
                userName: userName,
                userComment: newComment,
                added: today,
            }).then(() => {
                alert('Comentário adicionado com sucesso. Obrigado pelo seu feedback');
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'home' },
                    ]
                });
            }).catch(error => {
                alert('Ops... Parece que ocorreu um erro, tente novamente mais tarde');
            })
        } else {
            alert('Você não digitou nada');
        } 
    } else {
        alert('Você precisa está logado para realizar essa ação');
    }
}

    return (
        <Container>
            <Scroll>
            
                <SvgView>
                    <SvgBarber width={280} height={220} />
                </SvgView>
                <TextView>                    
                    <BigText> Bem Vindo </BigText>
                    <SmallText> 
                        App oficial da barbearia BarberMen, aqui você pode 
                        marcar seu horário e ainda pagar o serviço 
                    </SmallText>
                </TextView>
                
                {!user?
                    <LoginBtnView>
                        <BtnComponent bdColor='#333' border="1px solid" underlayColor="rgba(0, 0, 0, 0.1)" bgColor="transparent" width="80%" 
                            onPress={() => navigation.navigate('signup')}>
                            <>
                                <BtnText style={{color: '#333'}}> Cadastrar-se </BtnText> 
                                <Icon name="angle-right" size={25} style={{color: '#333'}} />
                            </>
                        </BtnComponent>
                        
                        <BtnComponent mTop="20px" underlayColor="rgba(0, 0, 0, 0.8)" bgColor='#333' width="80%" 
                            onPress={() => navigation.navigate('login')}>
                            <>
                                <BtnText style={{color: '#fff'}}> Login </BtnText> 
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </>
                        </BtnComponent>
                    
                    </LoginBtnView>
                :null}

                <CommentsTitle>
                    <TitleText color={color}> Reviews </TitleText>
                    <Icon name="arrow-right" color='rgba(0, 0, 0, 0.5)' size={22} style={{marginTop: 7}} />
                </CommentsTitle>

                <CommentsView>
                    {comments.map((c, k) => (
                        <Comments key={k}>
                            <CommentsHeader>
                                <CommentsAvatar source={require('../../assets/img/perfil1.jpg')} />
                                <CommentsName> {c.userName} </CommentsName>
                            </CommentsHeader>
                            <CommentsRate>
                                <Icon name="star-o" color='#333' size={16} style={{marginRight: 3}} />
                                <Icon name="star-o" color='#333' size={16} style={{marginRight: 3}} />
                                <Icon name="star-o" color='#333' size={16} style={{marginRight: 3}} />
                                <Icon name="star-o" color='#333' size={16} style={{marginRight: 3}} />
                                <Icon name="star-o" color='#333' size={16} style={{marginRight: 3}} />
                                <CommentsDate> {today} </CommentsDate>
                            </CommentsRate>
                            <CommentsText> {c.userComment} </CommentsText>
                        </Comments>
                    ))}
                    
                </CommentsView>
               
                <AddComments>
                    <Input placeholderTextColor='rgba(0, 0, 0, 0.5)' onChangeText={c=>setNewComment(c)} placeholder="Escreva um comentário..." />
                    <BtnComponent onPress={AddComment} width="100%" bgColor={color} radius="100px">
                        <BtnText style={{textAlign: 'center', color: '#fff'}}> Enviar </BtnText>
                    </BtnComponent>
                </AddComments>
            </Scroll>
        </Container>
    );
}
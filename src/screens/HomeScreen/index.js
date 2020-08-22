import React, {useState, useEffect, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgBarber from '../../assets/svg/home.svg';     // SVG BARBER
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import {
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
    CommentsDate,   // Text com a data do comentário
    CommentsRate,   // View com icons de estrelas mostrando o rating e a data do comentário
    CommentsText,   // Texto da sessão de comentários

    AddComments,    // View com input e button para add comentários
    Input,          // Input de add comentários
} from './style';


export default () => {
const navigation = useNavigation();

const [userName, setUserName] = useState();
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');
const [isVisible, setIsVisible] = useState(false);

const user = auth().currentUser;        // Pengado usuário logado

/** Setando data de hoje e formatando para padrão do Brasil */
let day = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear()
let today = day+'/'+month+'/'+year;

useEffect(() => {       // ShimmerPlaceholder será desfeito após 3 segundos (3000 milisegundos) e mostrará os comentários
    setTimeout(() => {
        setIsVisible(true);
    }, 3000)
}, [])

useEffect(() => {       // Se tiver alguém logado, irá ser procurado na firebase alguém que tenha o mesmo id do usuário logado para setar o nome dele em uma constante
    if(user) {
        firestore()
        .collection('users')
        .where('id', '==', user.uid)
        .get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                setUserName(documentSnapshot.data().name);
            })
        })
    }
}, [])

useEffect(() => {       // Pegando todos os comentários e setando-os em um array
    firestore()
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
}, [])


   
function AddComment() {     // Function de adicionar comentários, para isso precisar ter usuário logado e ter digitado algo no input
    if(user) {  
        if(newComment) {
            firestore()
            .collection('comments')
            .add({
                userId: user.uid,
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
                    <BigText bot="0" color="#434343"> BarberMen </BigText>
                    <SmallText color="#434343"> 
                    Bem vindo ao App da barbearia Barbemen, aqui você pode marcar seu atendimento e ainda pagar via cartão ou PicPay 
                    </SmallText>
                
                {!user?
                    <LoginBtnView>
                        
                        <BtnComponent underlayColor="rgba(0, 0, 0, 0.8)" bgColor='#E76F51' width="100%" 
                            onPress={() => navigation.navigate('login')}>
                            <>
                                <BtnText style={{color: '#fff'}}> Login </BtnText> 
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </>
                        </BtnComponent>
                    
                        <BtnComponent mTop="20px" bdColor='#E76F51' border="1px solid" underlayColor="rgba(0, 0, 0, 0.1)" bgColor="transparent" width="100%" 
                            onPress={() => navigation.navigate('signup')}>
                            <>
                                <BtnText style={{color: '#434343'}}> Cadastro </BtnText> 
                                <Icon name="angle-right" size={25} style={{color: '#434343'}} />
                            </>
                        </BtnComponent>
                    </LoginBtnView>
                :null}

                <CommentsTitle>
                    <TitleText> Reviews </TitleText>
                    <Icon name="arrow-right" color='#434343' size={22} style={{marginTop: 7}} />
                </CommentsTitle>

                <CommentsView>
                    {comments.map((c, k) => (
                        <Comments key={k}>
                            <CommentsHeader>

                            <ShimmerPlaceholder
                                style={{height: 50, width: 50, borderRadius: 100}}
                                autoRun={true}
                                visible={isVisible}
                            >
                                <CommentsAvatar source={require('../../assets/img/perfil1.jpg')} />
                            </ShimmerPlaceholder>

                            <ShimmerPlaceholder
                                style={{height: 30, width: '50%', borderRadius: 100, marginLeft: 10}}
                                autoRun={true}
                                visible={isVisible}
                            >
                                <CommentsName>{c.userName} </CommentsName>
                                <CommentsDate style={{marginTop: 5}}>{c.added} </CommentsDate>

                            </ShimmerPlaceholder>

                            </CommentsHeader>

                            <ShimmerPlaceholder
                                style={{height: 30, width: '70%', borderRadius: 100, marginTop: 10, marginBottom: 10}}
                                autoRun={true}
                                visible={isVisible}
                            >
                                <CommentsRate>
                                    <Icon name="star-o" color='#434343' size={20} style={{marginRight: 3}} />
                                    <Icon name="star-o" color='#434343' size={20} style={{marginRight: 3}} />
                                    <Icon name="star-o" color='#434343' size={20} style={{marginRight: 3}} />
                                    <Icon name="star-o" color='#434343' size={20} style={{marginRight: 3}} />
                                    <Icon name="star-o" color='#434343' size={20} style={{marginRight: 3}} />
                                </CommentsRate>
                            </ShimmerPlaceholder>

                            <ShimmerPlaceholder
                                style={{height: 120, width: '100%', borderRadius: 50, marginTop: 5}}
                                autoRun={true}
                                visible={isVisible}
                            >
                                <CommentsText>{c.userComment} </CommentsText>
                            </ShimmerPlaceholder>

                        </Comments>
                    ))}
                </CommentsView>

                <AddComments>
                    <Input placeholderTextColor='#434343' onChangeText={c=>setNewComment(c)} placeholder="Escreva um comentário..." />
                    <BtnComponent onPress={AddComment} width="100%" bgColor='#E76F51' radius="100px">
                        <BtnText style={{textAlign: 'center', color: '#fff'}}> Enviar </BtnText>
                    </BtnComponent>
                </AddComments>
            </Scroll>
        </Container>
    );
}

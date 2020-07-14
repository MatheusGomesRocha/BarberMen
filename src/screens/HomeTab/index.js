import React from 'react';
import {
    Container,      // Toda a tela

    Scroll,         // View pra realizar Scroll da tela

    SvgView,        // View que ficou o SVG

    ViewWelcome,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução

    LoginBtnView,   // View com botão de login
    BtnText,        // Texto dentro do button

    SignUpView,     // View de texto para Cadastro
    SignUpText,     // Texto de cadastro (TEMPORÁRIO. MUDAR PARA UM BUTTON QUE REDIRECIONA PARA O STACK DE CADASTRO)
    Bold,           // Texto em negrito
    
    CommentsTitle,  // View onde fica todo o título da sessão de comentários
    LineView,       // View pra mostrar uma linha de 40% da tela
    TitleView,      // View que fica o texto do título da sessão de comentários
    TitleText,      // Texto com o título da sessão de comentários
    CommentsView,   // View da sessão de comentários
    CommentsText,   // Texto da sessão de comentários
    
} from './style';

import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgBarber from '../../assets/svg/undraw_barber_3uel.svg';     // SVG BARBER
export default () => {

    return (
        <Container>
            <Scroll>

                <SvgView>
                    <SvgBarber width={280} height={260} />
                </SvgView>
                <ViewWelcome>                    
                    <BigText> Bem Vindo </BigText>
                    <SmallText> 
                        App oficial da barbearia BarberMen, aqui você pode 
                        marcar seu horário e ainda pagar o serviço
                    </SmallText>
                </ViewWelcome>
                

                <LoginBtnView>
                    <BtnComponent underlayColor="rgba(0, 0, 0, 0.8)" bgColor="#333" width="80%" onPress={() => alert('Login')}>
                        <>
                            <BtnText> Login </BtnText> 
                            <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                        </>
                    </BtnComponent>
                    <SignUpView>
                            <SignUpText> Não tenha uma conta? </SignUpText>
                            <Bold> Cadastre-se </Bold>
                    </SignUpView>
                </LoginBtnView>


                <CommentsTitle>
                    <LineView></LineView>
                    <TitleView>
                        <TitleText> Comentários </TitleText>
                    </TitleView>
                    <LineView></LineView>
                </CommentsTitle>
                <CommentsView>
                    <CommentsText> Sessão separado para comentário de usuário </CommentsText>
                </CommentsView>

            </Scroll>
        </Container>
    );
}
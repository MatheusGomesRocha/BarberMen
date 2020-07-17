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

    CommentsTitle,  // View onde fica todo o título da sessão de comentários
    LineView,       // View pra mostrar uma linha de 40% da tela
    TitleView,      // View que fica o texto do título da sessão de comentários
    TitleText,      // Texto com o título da sessão de comentários
    CommentsView,   // View da sessão de comentários
    CommentsText,   // Texto da sessão de comentários
    
} from './style';

import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgBarber from '../../assets/svg/undraw_barber_3uel.svg';     // SVG BARBER
import SettingsStack from '../../navigators/SettingsStack';

export default () => {
const navigation = useNavigation();

    return (
        <Container>
            <Scroll>
            
                <SvgView>
                    <SvgBarber width={280} height={220} />
                </SvgView>
                <ViewWelcome>                    
                    <BigText> Bem Vindo </BigText>
                    <SmallText> 
                        App oficial da barbearia BarberMen, aqui você pode 
                        marcar seu horário e ainda pagar o serviço
                    </SmallText>
                </ViewWelcome>
                

                <LoginBtnView>
                    <BtnComponent border="1px solid #000" underlayColor="rgba(0, 0, 0, 0.1)" bgColor="transparent" width="80%" 
                        onPress={() => navigation.navigate('signup')}>
                        <>
                            <BtnText style={{color: '#333'}}> Cadastrar-se </BtnText> 
                            <Icon name="angle-right" size={25} style={{color: '#333'}} />
                        </>
                    </BtnComponent>
                    <BtnComponent mTop="20px" underlayColor="rgba(0, 0, 0, 0.8)" bgColor="#333" width="80%" 
                        onPress={() => navigation.navigate('login')}>
                        <>
                            <BtnText> Login </BtnText> 
                            <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                        </>
                    </BtnComponent>
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
import React from 'react';
import {
    Container,
    Scroll,
    LoginBtnView,
    BtnText,
    SignUpView,
    SignUpText,
    Bold,
    BannerView,
    BannerImg,
    ViewRow,
    LineView,
    TextView,
    BigText,
    UsView,
    UsText,
    SmallText,
    UsImg,
    CommentsView,
    CommentsText,
    LineText,
    
} from './style';

import BtnComponent from '../../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAppSvg from '../../assets/svg/undraw_barber_3uel.svg';     // SVG BARBER
export default () => {

    return (
        <Container>
            <Scroll>
                <BannerView>
                    <MyAppSvg width={280} height={260} />
                </BannerView>
                <ViewRow>                    
                    <BigText> Bem Vindo </BigText>
                    <SmallText> 
                        App oficial da barbearia BarberMen, aqui você pode 
                        marcar seu horário e ainda pagar o serviço
                    </SmallText>
                </ViewRow>
                

                <LoginBtnView>
                    <BtnComponent underlayColor="rgba(0, 0, 0, 0.8)" bgColor="#000" width="80%" onPress={() => alert('Login')}>
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

                <ViewRow>
                    <LineView></LineView>
                    <TextView>
                        <LineText> Comentários </LineText>
                    </TextView>
                    <LineView></LineView>
                </ViewRow>
                <CommentsView>
                    <CommentsText> Sessão separado para comentário de usuário </CommentsText>
                </CommentsView>
            </Scroll>
        </Container>
    );
}
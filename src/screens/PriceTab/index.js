import React from 'react';
import { 
    Container,
    LogoView,
    LogoImg,
    LineIcon,
    HeaderView,
    HeaderLine,
    HeaderText,
    ViewText,
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
    return (
        <Container>
            <LogoView>
                <LineIcon>
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                </LineIcon>
                <LogoImg source={require('../../assets/logo.png')} />
                <LineIcon>
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                    <Icon name="star" size={25} />
                </LineIcon>
            </LogoView>
            <HeaderView>
                <HeaderLine></HeaderLine>
                <ViewText>
                    <HeaderText> Preços </HeaderText>
                </ViewText>
                <HeaderLine></HeaderLine>
            </HeaderView>
        </Container>
    );
}
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
    TableView,
    ItemView,
    ItemText,
    DotText,
    PriceText,
} from './style';

import { View } from 'react-native';
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

            {/** Depois cadastrar esses dados em um bd e trazer pra cá */}
            <TableView>
                <ItemView>
                    <Icon name="heart-o" size={23}/>
                    <ItemText> Corte </ItemText>
                    <PriceText> 20,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Corte Infantil </ItemText>
                    <DotText>...........</DotText>
                    <PriceText> 15,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Sobrancelha </ItemText>
                    <DotText>..........</DotText>
                    <PriceText> 10,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Cabelo + Sobrancelha </ItemText>
                    <DotText>.........</DotText>
                    <PriceText> 27,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Cabelo + Barba </ItemText>
                    <DotText>................</DotText>
                    <PriceText> 30,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Barba </ItemText>
                    <DotText>...............</DotText>
                    <PriceText> 15,00 </PriceText>
                </ItemView>
                <ItemView>
                    <Icon name="heart-o" size={23} />
                    <ItemText> Degradê </ItemText>
                    <DotText>..........</DotText>
                    <PriceText> 30,00 </PriceText>
                </ItemView>
            </TableView>
        </Container>
    );
}
import React, {useState} from 'react';
import { 
    Container,
    Scroll,
    LogoView,
    LogoImg,
    LineIcon,
    HeaderView,
    HeaderLine,
    HeaderText,
    TableView,
    ItemView,
    ItemText,
    PriceText,
    BtnView,
    BtnText,
    Touch,
    ViewText,
    BigText,
    SmallText,
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';
import SvgMoney from '../../assets/svg/undraw_wallet_aym5.svg';

export default () => {
    let nameIcon = 'heart-o';
    const [icon, setIcon] = useState(false);

    // Função para adicionar aos favoritos, posteriormente fazer com dispatch para adicionar aos favoritos pelo id
    function ChangeIcon() {
        setIcon(!icon);
        
    }

    if(icon) {
        nameIcon = 'heart';
    } else {
        nameIcon = 'heart-o';
    }

    return (
        <Container>
            <Scroll decelerationRate="fast">
                <LogoView>
                    <SvgMoney width={280} height={260}/>
                </LogoView>
                <ViewText>
                    <BigText> Preços de serviços </BigText>
                    <SmallText> 
                        Escolha o corte que irá fazer clicando nele, você será redirecionado para escolher
                        o dia e horário, caso não tenha escolhido ainda.  
                    </SmallText>
                </ViewText>
                {/** Depois cadastrar esses dados em um bd e trazer pra cá */}
                <TableView>
                    <ItemView>                        
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte </ItemText>
                                <BtnText> R$ 20,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte infantil </ItemText>
                                <BtnText> R$ 10,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView> 
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Pintar </ItemText>
                                <BtnText> R$ 40,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Luzes </ItemText>
                                <BtnText> R$ 50,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Platinar </ItemText>
                                <BtnText> R$ 90,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Degradê </ItemText>
                                <BtnText> R$ 30,00 </BtnText>
                            </>                       
                            </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte + Sobrancelha </ItemText>
                                <BtnText> R$ 27,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte + Barba </ItemText>
                                <BtnText> R$ 30,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Degradê + Sobrancelha </ItemText>
                                <BtnText> R$ 35,00 </BtnText>
                            </>
                        </BtnComponent>
                    </ItemView>
                </TableView>
            </Scroll>
        </Container>
    );
}
import React, {useState} from 'react';
import { 
    Container,      // View de toda a tela

    Scroll,         // View que realiza scroll
    
    SvgView,        // View que fica o SVG

    ViewText,       // View que fica o texto
    BigText,        // Texto grande
    SmallText,      // Texto pequeno

    TableView,      // View onde ficam todos os items 
    ItemView,       // View onde fica 1 item (TEMPORÁRIO. PEGAR DADOS QUE VÃO VIR DO FIREBASE DEPOIS DE SEREM CADASTRADOS PELO O USUÁRIO E PASSAR PARA UM BUTTON)
    ItemText,       // Texto que fica o nome do item 
    PriceText,      // Texto que fica o preço do item
    
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
            <BtnComponent width="80px" height="80px" radius="100px" bgColor="#3ED3A1" style={{zIndex: 9999, position: 'absolute', right: 15, bottom: 15}}>
                <Icon name="arrow-right" size={30} color="#333"/>
            </BtnComponent>
            <Scroll decelerationRate="fast">
                
                <SvgView>
                    <SvgMoney width={280} height={260}/>
                </SvgView>

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
                                <PriceText> R$ 20,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte infantil </ItemText>
                                <PriceText> R$ 10,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView> 
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Pintar </ItemText>
                                <PriceText> R$ 40,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Luzes </ItemText>
                                <PriceText> R$ 50,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Platinar </ItemText>
                                <PriceText> R$ 90,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Degradê </ItemText>
                                <PriceText> R$ 30,00 </PriceText>
                            </>                       
                            </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte + Sobrancelha </ItemText>
                                <PriceText> R$ 27,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Corte + Barba </ItemText>
                                <PriceText> R$ 30,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                    <ItemView>
                        <BtnComponent bgColor="#333" width="90%" radius="100px">
                            <>
                                <ItemText> Degradê + Sobrancelha </ItemText>
                                <PriceText> R$ 35,00 </PriceText>
                            </>
                        </BtnComponent>
                    </ItemView>
                </TableView>

            </Scroll>
        </Container>
    );
}
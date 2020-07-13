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
    ViewText,
    TableView,
    ItemView,
    ItemText,
    PriceText,
    BtnView,
    BtnText,
    Touch
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import BtnComponent from '../../components/BtnComponent';

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
            <Scroll>
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
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Corte........................................20,00</ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Corte Infantil..........................15,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Sobrancelha...........................10,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Corte + Sobrancelha.............27,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Corte + Barba........................30,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Barba......................................15,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Degradê..................................30,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Platinar...................................50,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                    <ItemView>
                        <Touch underlayColor="transparent" onPress={ChangeIcon}>
                            <Icon name={nameIcon} size={23}/>
                        </Touch>
                        <ItemText> Luzes......................................45,00 </ItemText>
                        <BtnView>
                            <BtnComponent bgColor="#000" width="100%">
                                <Icon name="angle-right" size={25} style={{color: '#fff'}} />
                            </BtnComponent>
                        </BtnView>
                    </ItemView>
                </TableView>
            </Scroll>
        </Container>
    );
}
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import styled from 'styled-components/native';
import Stars from './Stars';

const ItemArea = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 20px;
`;
const Account = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;
const InfoArea = styled.View`
    margin-left: 20px; 
    justify-content: space-between;
`;
const Name = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;
const ProfileBtn = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    border: 1px solid #0096C7;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const ProfileText = styled.Text`
    font-size: 13px;
    color: #0096C7;
`;

export default ({data}) => {
    // Component de barbeiro que aparece nas telas home(por enquanto), search e favorite. Recebe data como parâmetro
    // e vem id stars(rate) e o nome do barbeiro selecionado. Posteriormente virá avatar do barber

    const navigation = useNavigation();     // Const para navegar

    const goToBarber = () => {              // função que navega para a tela de barbeiro com os parâmetro id, nome e rate do barber
        navigation.navigate('barber', {
            id: data.id,
            name: data.name,
            stars: data.stars,
        })
    }

    return(
        <ItemArea onPress={goToBarber}>
            <Account source={require('../assets/img/perfil1.jpg')} />

            <InfoArea>
                <Name>{data.name} </Name>

                <Stars stars={data.stars} showNumber={true} />

                <ProfileBtn>
                    <ProfileText>Ver Perfil</ProfileText>
                </ProfileBtn>
            </InfoArea>
        </ItemArea>
    );
}
import React from 'react';
import styled from 'styled-components/native';

const ItemArea = styled.View`
    background-color: #fff;
    margin: 0 20px 20px 20px;
    border-radius: 15px;
    padding: 10px 15px 20px 15px;
`;

const BarberArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 15px;
`;
const BarberName = styled.Text`
    margin-left: 5px;
    font-weight: bold;
    font-size: 18px;
`;

const ServiceArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;
const ServiceName = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
const ServicePrice = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

const DateArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;
const Date = styled.Text`
    color: #fff;
    font-weight: bold;
    background-color: #0096C7;
    border-radius: 10px;
    height: 50px;
    width: 120px;
    text-align: center;
    padding: 13px;
    font-size: 16px;
`;
const Hour = styled.Text`
    color: #fff;
    font-weight: bold;
    background-color: #0096C7;
    border-radius: 10px;
    height: 50px;
    width: 80px;
    text-align: center;
    padding: 13px;
    font-size: 16px;
`;

export default ({data}) => {
    return(
        <ItemArea style={{opacity: data.done ? 0.5 : 1}}>
            <BarberArea>
                <Avatar source={require('../assets/img/perfil1.jpg')} />
                <BarberName> {data.barberName} </BarberName>
            </BarberArea>

            <ServiceArea>
                <ServiceName> {data.serviceName} </ServiceName>
                <ServicePrice> R$ {data.servicePrice} </ServicePrice>
            </ServiceArea>

            <DateArea>
                <Date> {data.date} </Date>
                <Hour> {data.hour} </Hour>
            </DateArea>
        </ItemArea>
    );
}


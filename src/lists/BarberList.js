import React from 'react';
import styled from 'styled-components/native';
import BarberItem from '../components/BarberItem';

const Div = styled.View`
`;

export default ({data}) => {
    return(
            <Div>
                <BarberItem data={data} />
            </Div>        
    );
}
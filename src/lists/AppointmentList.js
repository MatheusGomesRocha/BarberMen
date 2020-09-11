import React from 'react';
import styled from 'styled-components/native';
import ItemDefault from '../components/ItemDefault';

const Div = styled.View`
`;

export default ({data}) => {
    return(
        <Div>
            <ItemDefault data={data} />
        </Div>        
    );
}
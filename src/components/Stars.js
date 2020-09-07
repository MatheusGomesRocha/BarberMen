import React from 'react';
import styled from 'styled-components/native';

import StarFull from '../assets/svg/star.svg';
import StarHalf from '../assets/svg/star_half.svg';
import StarEmpty from '../assets/svg/star_empty.svg';

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;

export default ({stars, showNumber}) => {       // Recebe os dados stars(em número 4.7) e showNumber se deve mostrar as estrelas 
    let s = [0, 0, 0, 0, 0];    // Variável com numeros
    let floor = Math.floor(stars);      // pega o número antes da virgula
    let left = stars - floor;   // pega o número que sobrou depois da virgula           

    for(var i=0; i<floor; i++) {    // para cada número antes da virgula que for maior que 0, a variável recebe (2)
        s[i] = 2;
    }

    if(left > 0) {  // e se o numero depois da virgula for maior que 0, recebe (1)
        s[i] = 1;
    }

    // Caso o rate for 0.0 a variável "S" recebe uma estrela vazia
    // Caso for um número como 4.0 recebe 4 estrelas full e 1 vazia
    // Caso for um número como 3.7 recebe 3 estrelas vazias, 1 meia e 1 vazia
    return (
        <StarArea>
            {s.map((s, k) => (
                <StarView key={k}>
                    {s === 0 && <StarEmpty width="18" height="18" fill="#ff9200" />}
                    {s === 1 && <StarHalf width="18" height="18" fill="#ff9200" />}
                    {s === 2 && <StarFull width="18" height="18" fill="#ff9200" />}
                </StarView>
            ))}

            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}
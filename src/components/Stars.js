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

export default ({stars, showNumber}) => {
    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for(var i=0; i<floor; i++) {
        s[i] = 2;
    }

    if(left > 0) {
        s[i] = 1;
    }

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
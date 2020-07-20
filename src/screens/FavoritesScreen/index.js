import React, {useState} from 'react';
import {
    Container,
    
    Scroll, 

    FavoritesView,
    FavoritesItem,
    FavoritesBtn,
    FavoritesText,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>

                <FavoritesView>

                    <FavoritesItem>
                        <FavoritesBtn underlayColor="transparent" onPress={() => alert('olá')}>
                            <FavoritesText> Corte infantil </FavoritesText>
                        </FavoritesBtn>
                    </FavoritesItem>

                </FavoritesView>
            
            </Scroll>
        </Container>
    );
}
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
    TextView,    // View de bem-vindo
    BigText,        // Texto grande de Bem-Vindo
    SmallText,      // Texto pequeno de introdução
} from '../../components/TextView';

import {
    Container,
    
    Scroll, 

    FavoritesView,
    FavoritesItem,
    FavoritesBtn,
    FavoritesText,
} from './style';

export default () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
          .collection('favorites')
          .onSnapshot(querySnapshot => {
            const favoritesArray = [];

            querySnapshot.forEach(documentSnapshot => {
                favoritesArray.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setFavorites(favoritesArray);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

    return(
        <Container>
            <Scroll>

                <TextView style={{marginTop: 50}}>
                    <BigText color="#333"> Favoritos </BigText>
                    <SmallText color="rgba(0, 0, 0, 0.5)"> 
                        Aqui estão os cortes que você adicionou aos favoritos (uma opção para escolher seu corte mais rapidamente)
                    </SmallText>
                </TextView>

                <FavoritesView>
                    {favorites.map((f, k) => (
                        <FavoritesItem key={k}>
                            <FavoritesBtn underlayColor="transparent" onPress={() => alert('olá')}>
                                <FavoritesText> {f.nameCut} </FavoritesText>
                            </FavoritesBtn>
                        </FavoritesItem>
                    ))}
                    

                </FavoritesView>
            
            </Scroll>
        </Container>
    );
}
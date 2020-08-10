import React, {useState, useEffect} from 'react';
import {
    Container,
    
    Scroll, 

    FavoritesView,
    FavoritesItem,
    FavoritesBtn,
    FavoritesText,
} from './style';
import firestore from '@react-native-firebase/firestore';

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
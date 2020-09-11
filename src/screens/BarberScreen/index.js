import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import FavoriteIcon from '../../assets/svg/favorite.svg';
import FavoriteFullIcon from '../../assets/svg/favorite_full.svg';
import PrevIcon from '../../assets/svg/nav_prev.svg';
import NextIcon from '../../assets/svg/nav_next.svg';
import Swiper from 'react-native-swiper';
import Api from '../../Api';

import Stars from '../../components/Stars';
import Modal from '../../components/Modal';

import {
    Container,
    Scroll,
    FakeSwiper,
    Body,

    UserArea,
    UserAvatar,
    UserInfo,
    UserName,
    UserFavBtn,

    LoadingIcon,

    ServicesArea,
    ServicesTitle,
    ServicesItem,
    ServicesInfo,
    ServicesName,
    ServicesPrice,
    ServicesBtn,
    ServicesBtnText,

    CommentsArea,
    CommentsItem,
    CommentsInfo,
    CommentsName,
    CommentsBody,
} from './style';

export default () => {
    const route = useRoute();

    const userInfo = auth().currentUser;

    const [barber, setBarber] = useState({
        id: route.params.id,
        name: route.params.name,
        stars: route.params.stars,
    });
    
    const [loading, setLoading] = useState(false);
    const [cuts, setCuts] = useState([]);
    const [comments, setComments] = useState([]);
    const [favorited, setFavorited] = useState(false);
    const [selectServiceId, setSelectServiceId] = useState();
    const [selectServiceName, setSelectServiceName] = useState();
    const [selectServicePrice, setSelectServicePrice] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {           // Pega os serviços que estão em uma collection "cuts" no firebase e passa para um array
        const getServices = async () => {
            setLoading(true);
            
            let json = await Api.getServicesByBarber(barber.id);

            setCuts(json);
            setLoading(false);
        }

        getServices();
  }, []);

  useEffect(() => {           // Pega os serviços que estão em uma collection "cuts" no firebase e passa para um array
        const getComments = async () => {
            setLoading(true);
            
           let json = await Api.getComments(barber.id);

            setComments(json);
            setLoading(false);
        }

        getComments();
  }, []);

  const handleFavBtn = () => {
        setFavorited(!favorited)
  }

  const openModal = (id, name, price) => {
    setSelectServiceId(id);
    setSelectServiceName(name);
    setSelectServicePrice(price);
    setShowModal(true);
  }

    return(
        <Container>
            <Scroll>
                <FakeSwiper></FakeSwiper>

                <Body>
                    <UserArea>
                        <UserAvatar source={require('../../assets/img/perfil2.jpg')} />
                        <UserInfo>
                            <UserName> {barber.name} </UserName>
                            <Stars stars={barber.stars} showNumber={true} />
                        </UserInfo>

                        <UserFavBtn onPress={handleFavBtn}> 
                            {favorited ?
                                <FavoriteFullIcon width="24" height="24" fill="#ff0000" />
                            : 
                                <FavoriteIcon width="24" height="24" fill="#ff0000" />
                            }
                        </UserFavBtn>
                    </UserArea>

                   
                        <ServicesArea>
                            <ServicesTitle>Lista de serviços</ServicesTitle>
                            {loading && 
                                <LoadingIcon size="large" color="#000" />
                            }
                            {cuts.map((c, k) => (
                                <ServicesItem key={k}>
                                    <ServicesInfo>
                                        <ServicesName> {c.name} </ServicesName>
                                        <ServicesPrice> R$ {c.price} </ServicesPrice>
                                    </ServicesInfo>
                                    <ServicesBtn onPress={() => openModal(c.id, c.name, c.price)}>
                                        <ServicesBtnText> Agendar </ServicesBtnText>
                                    </ServicesBtn>
                                </ServicesItem>
                            ))}
                        </ServicesArea>

                        {comments && comments.length > 0 &&
                            <CommentsArea>
                                <Swiper
                                    style={{height: 110}}
                                    showsPagination={false}
                                    showsButtons={true}
                                    prevButton={<PrevIcon width="35" height="35" fill="#000" />}
                                    nextButton={<NextIcon width="35" height="35" fill="#000" />}
                                >
                                    {comments.map((c, k) => (
                                        <CommentsItem key={k}>
                                            <CommentsInfo>
                                                <CommentsName>{c.userName} </CommentsName>
                                                <Stars stars={5} showNumber={false} />
                                            </CommentsInfo>
                                            <CommentsBody>{c.userComment} </CommentsBody>
                                        </CommentsItem>
                                    ))}
                                </Swiper>
                            </CommentsArea>
                        }
                    
                </Body>

            </Scroll>

            <Modal 
                show={showModal}
                setShow={setShowModal}
                barber={barber}
                serviceId={selectServiceId}
                serviceName={selectServiceName}
                servicePrice={selectServicePrice}
            />
        </Container>
    );
}
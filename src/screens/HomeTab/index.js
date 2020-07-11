import React from 'react';
import {
    Container,
    Scroll,
    BtnText,
    BannerView,
    BannerImg,
    ViewRow,
    LineView,
    TextView,
    UsView,
    UsText,
    UsImg,
    CommentsView,
    CommentsText,
    LineText
} from './style';

import BtnComponent from '../../components/BtnComponent';
export default () => {

    return (
        <Container>
            <Scroll>
                <BannerView>
                    <BannerImg source={require('../../assets/banner.jpg')} />
                </BannerView>
                <ViewRow>
                    <LineView></LineView>
                    <TextView>
                        <BtnComponent>
                            <BtnText> Login </BtnText>
                        </BtnComponent>
                    </TextView>
                    <LineView></LineView>
                </ViewRow>
                <UsView>
                    <UsText> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget leo a arcu ultricies congue vel non leo. Donec porta sem id lacus lobortis, sit amet finibus leo interdum. Proin nisl justo, consequat eu ante in, gravida commodo dolor. Donec laoreet dui ut magna finibus fringilla. Donec eget tortor fermentum, scelerisque diam at, blandit massa. Duis ut convallis enim, sit amet consectetur augue. Fusce porttitor, mi nec pulvinar commodo, nunc elit accumsan turpis, sed euismod elit eros quis mauris. Suspendisse potenti. Duis vitae lectus sodales, egestas magna id, rhoncus dui.
                    </UsText>
                    <UsImg source={require('../../assets/place.jpg')} />
                </UsView>
                <ViewRow>
                    <LineView></LineView>
                    <TextView>
                        <LineText> Comentários </LineText>
                    </TextView>
                    <LineView></LineView>
                </ViewRow>
                <CommentsView>
                    <CommentsText> Sessão separado para comentário de usuário </CommentsText>
                </CommentsView>
            </Scroll>
        </Container>
    );
}
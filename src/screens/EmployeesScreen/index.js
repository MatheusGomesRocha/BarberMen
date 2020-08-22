import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import {
    Header,
    HeaderLeft,
    HeaderButton,
} from '../../components/HeaderComponent';

import {
    Container,              // View toda a tela
    
    Scroll,                 // View de Scroll

    AllView,                // View de todos os funcionários
    WorkerView,             // View de um funcionário
    WorkerImg,              // Imagem do funcionário
    WorkerName,             // Nome 
    WorkerDescription,      // Descrição
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Header>
                <HeaderButton underlayColor="transparent"  onPress={() => navigation.goBack()}>
                    <HeaderLeft>  <Icon name="angle-left" size={22} /> Funcionários </HeaderLeft>
                </HeaderButton>
            </Header>

            <Scroll>

                <AllView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil1.jpg') }/>
                        <WorkerName> Matheus </WorkerName>
                        <WorkerDescription> Cabeleleiro a 25 anos e dono da Barbermen </WorkerDescription>
                    </WorkerView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil2.jpg') }/>
                        <WorkerName> Laura </WorkerName>
                        <WorkerDescription> Cabeleleiro a 15 anos, trabalha conosco a 5 e é especialista em cortes artísticos </WorkerDescription>
                    </WorkerView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil3.jpg') }/>
                        <WorkerName> Joana </WorkerName>
                        <WorkerDescription> Cabeleleira a 12 anos, trabalha conosco a 2 e é especialista em cortes robustos </WorkerDescription>
                    </WorkerView>

                </AllView>
            </Scroll>
        </Container>
    );
}
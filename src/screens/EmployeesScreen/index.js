import React from 'react';
import {
    Container,
    
    Scroll,

    AllView,
    WorkerView,
    WorkerImg,
    WorkerName,
    WorkerDescription,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>

                <AllView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil1.jpg') }/>
                        <WorkerName> Matheus </WorkerName>
                        <WorkerDescription> Cabeleleiro a 25 anos e dono da Barbermen </WorkerDescription>
                    </WorkerView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil2.jpg') }/>
                        <WorkerName> Felipe </WorkerName>
                        <WorkerDescription> Cabeleleiro a 15 anos, trabalha conosco a 5 e é especialista em cortes mais artísticos </WorkerDescription>
                    </WorkerView>

                    <WorkerView>
                        <WorkerImg source={require('../../assets/img/perfil3.jpg') }/>
                        <WorkerName> Joana </WorkerName>
                        <WorkerDescription> Cabeleleira a 12 anos, trabalha conosco a 2 e é especialista em cortes mais robustos </WorkerDescription>
                    </WorkerView>

                </AllView>
            </Scroll>
        </Container>
    );
}
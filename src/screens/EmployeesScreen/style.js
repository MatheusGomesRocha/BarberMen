import styled from 'styled-components/native';


// View toda a tela
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


// View de Scroll
export const Scroll = styled.ScrollView``;


// + View de todos os funcionários
// + View de um funcionário
// + Imagem do funcionário
// + Nome 
// + Descrição
export const AllView = styled.View`
    flex-direction: column;
`;
export const WorkerView = styled.View`
    height: 250px;
    justify-content: center;
    align-items: center;
`;
export const WorkerImg = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 100px;
`;
export const WorkerName = styled.Text`
    font-size: 20px;
    color: #333;
    text-align: center;
    padding: 10px;
`;
export const WorkerDescription = styled.Text`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
`;
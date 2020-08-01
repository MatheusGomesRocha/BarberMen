import styled from 'styled-components/native';


// + View de bem-vindo  
// + Texto grande de Bem-Vindo
// + Texto pequeno de introdução
export const TextView = styled.View`
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;
export const BigText = styled.Text`
    font-weight: bold;
    font-size: 45px;
    text-align: center;
    color: ${props=>props.color || '#333'};

`;
export const SmallText = styled.Text`
    margin: 10px 20px 0 20px;
    text-align: center;
    color: ${props=>props.color || 'rgba(0, 0, 0, 0.5)'};
    font-size: 16px;
`;
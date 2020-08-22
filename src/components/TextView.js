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
    font-size: 28px;
    text-align: center;
    color: #434343;
    margin-bottom: ${props=>props.bot || '20px'}; 
`;
export const SmallText = styled.Text`
    margin: 30px 0 20px 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
`;
import styled from 'styled-components/native';

export default styled.TouchableHighlight`
    background-color: ${props=>props.bgColor};
    width: ${props=>props.width};
    height: ${props=>props.height || '60px'};
    border-radius: ${props=>props.radius || '10px'};
    margin-top: ${props=>props.mTop || '0'};
    border: ${props=>props.border || 'none'};
    border-color: ${props=>props.bdColor || '#333'};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

import styled from 'styled-components';

export default styled.TouchableHighlight`
    background-color: ${props=>props.bgColor};
    width: ${props=>props.width};
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

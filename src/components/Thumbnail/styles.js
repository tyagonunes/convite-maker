import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.div`
    background-image: url(${props => props.src});
    width: 180px;
    height: 269px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
`;

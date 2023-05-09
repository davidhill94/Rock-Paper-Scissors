import styled from 'styled-components';

export const HeaderWrapper = styled.div`
width: 100%;
height: 15vh;
border: 2px solid #000;
display: grid;
grid-template-columns: 50% 50%;
place-items: center;
`

export const AreaOne = styled.div`
grid-column: 1 / 2;
background-color: blue;
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`
export const AreaTwo = styled.div`
grid-column: 2 / 3;
background-color: white;
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`
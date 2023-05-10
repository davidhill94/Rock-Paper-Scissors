import styled from "styled-components";

export const SelectionWrapper = styled.div`
max-width: 100vw;
height: 85vh;
display: grid;
grid-template-columns: repeat(3, auto);
grid-template-rows: 20% auto;
position: relative;
overflow: hidden;
`

export const SelectText = styled.p`
font-size: 3rem;
grid-column: 1 / 4;
grid-row: 1 / 2;
display: flex;
align-items: center;
justify-content: center;
`
export const SelectionButton = styled.button`
font-size: 8rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
height: 230px;
width: 230px;
margin: 0 0 0.5rem 0;
background-color: var(--theme-secondary);
cursor: pointer;
box-shadow: 0px 0px 10px var(--theme-tertiary);

&:hover {
    box-shadow: inset 0px 0px 5px 5px var(--theme-tertiary);
}
`

export const Rock = styled.div`
grid-column: 1 / 2;
grid-row: 2 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 4rem 0;
`
export const Paper = styled.div`
grid-column: 2 / 3;
grid-row: 2 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 4rem 0;
`
export const Scissors = styled.div`
grid-column: 3 / 4;
grid-row: 2 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 4rem 0;
`
export const ItemText = styled.h1`
font-size: 3rem;
`
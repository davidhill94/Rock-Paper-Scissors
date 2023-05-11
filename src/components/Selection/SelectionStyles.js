import styled from "styled-components";

export const SelectionWrapper = styled.div`
max-width: 100vw;
height: 85vh;
display: grid;
grid-template-columns: repeat(3, auto);
grid-template-rows: 10% auto;
overflow: hidden;
position: relative;

@media screen and (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-rows: 15% 20% 20% 20% auto;
    padding-left: 2.5rem;
}
`

export const SelectText = styled.p`
font-size: 3rem;
grid-column: 1 / 4;
grid-row: 1 / 2;
display: flex;
align-items: center;
justify-content: center;
padding-top: 1rem;

@media screen and (max-width: 425px) {
    grid-column: 1 / 2;
}
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
color: var(--theme-tertiary);
cursor: pointer;
box-shadow: 0px 0px 10px var(--theme-tertiary);

&:hover {
    box-shadow: inset 0px 0px 5px 5px var(--theme-tertiary);
}

@media screen and (max-width: 768px) {
    height: 180px;
    width: 180px;
    font-size: 6rem;
}
@media screen and (max-width: 475px) {
    height: 100px;
    width: 100px;
    font-size: 3.5rem;
    margin-right: 2rem;
}
@media screen and (max-width: 380px) {
    height: 80px;
    width: 80px;
    font-size: 2.5rem;
    margin-right: 1rem;
}
@media screen and (max-width: 300px) {
    height: 75px;
    width: 75px;
    font-size: 2rem;
    margin-right: 1rem;
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

@media screen and (max-width: 425px) {
    grid-row: 2 / 3;
    margin: 0;
    flex-direction: row;
    justify-content: start;
    padding: 0 1rem;
}
`
export const Paper = styled.div`
grid-column: 2 / 3;
grid-row: 2 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 4rem 0;

@media screen and (max-width: 425px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    margin: 0;
    flex-direction: row;
    justify-content: start;
    padding: 0 1rem;
}
`
export const Scissors = styled.div`
grid-column: 3 / 4;
grid-row: 2 / 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 4rem 0;

@media screen and (max-width: 425px) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
    margin: 0;
    flex-direction: row;
    justify-content: start;
    padding: 0 1rem;
}
`
export const ItemText = styled.h1`
font-size: 3rem;

@media screen and (max-width: 425px) {
    font-size: 2.5rem;
}
@media screen and (max-width: 300px) {
    font-size: 1.5rem;
}
`
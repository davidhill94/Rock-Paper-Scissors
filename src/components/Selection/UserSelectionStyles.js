import styled from "styled-components";

export const UserSelectionWrapper = styled.div`
width: 50.5%;
height: 100%;
position: absolute;
top: 0;
left: ${(props) => (props.selected ? "0vw" : "-50vw")};
transition: 0.5s ease;
background-color: var(--theme-fourth);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 425px) {
    width: 100%;
    height: 50.5%; 
    left: ${(props) => (props.selected ? "0vw" : "-100vw")}; 
}
`
export const H1Text = styled.h1`
font-size: 2.5rem;

@media screen and (max-width: 425px) {
    font-size: 2rem;
    margin-top: 1.5rem;
  }
`
export const UserPickWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
`
export const SelectedIcon = styled.p`
font-size: 8rem;
background-color: var(--theme-secondary);
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
height: 230px;
width: 230px;
margin: 2rem 0;
border: 2px solid var(--theme-tertiary);
box-shadow: 0px 0px 10px var(--theme-tertiary);

@media screen and (max-width: 425px) {
    height: 200px;
    width: 200px;
    font-size: 5rem;
    margin: 0.5rem;
  }
  @media screen and (max-height: 760px) {
    height: 150px;
    width: 150px;
    font-size: 4rem;
    margin: 0.5rem;
  }
  @media screen and (max-width: 300px) {
    height: 150px;
    width: 150px;
    font-size: 4rem;
    margin: 0.5rem;
  }
`
export const SelectedText = styled.p`
font-size: 3rem;
`
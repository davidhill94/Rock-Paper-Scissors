import styled from "styled-components";

export const UserSelectionWrapper = styled.div`
width: 50%;
height: 100%;
position: absolute;
top: 0;
left: ${(props) => (props.selected ? "0vw" : "-50vw")};
transition: 0.5s ease;
background-color: red;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const H1Text = styled.h1`
font-size: 2.5rem;
`
export const UserPickWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
`
export const SelectedText = styled.p`
font-size: 3rem;
`
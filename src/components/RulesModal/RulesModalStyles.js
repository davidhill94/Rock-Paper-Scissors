import styled from "styled-components";

export const ModalWrapper = styled.div`
height: 35vh;
width: 100%;
position: absolute;
bottom: ${(props) => (props.modal ? "0" : "-35vh")};
background-color: var(--theme-secondary);
transition: 0.5s ease;
border-top: 2px solid var(--theme-tertiary);
`
export const ModalContent = styled.div`
width: auto;
height: 65%;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px solid var(--theme-tertiary);
`
export const Rule = styled.p`
font-size: 2rem;
text-align: center;
margin: 0 2rem;
`
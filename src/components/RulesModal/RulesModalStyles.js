import styled from "styled-components";

export const ModalWrapper = styled.div`
height: 35vh;
width: 100%;
position: absolute;
bottom: ${(props) => (props.modal ? "0" : "-35vh")};
background-color: orange;
transition: 0.5s ease;
`
export const ModalContent = styled.div`
width: auto;
height: 65%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid var(--theme-secondary);
margin: 0.5rem;
`
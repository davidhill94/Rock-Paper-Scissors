import styled from "styled-components";

export const ModalWrapper = styled.div`
height: ${(props) => (props.modal ? "35vh" : "0")};;
width: 100%;
position: absolute;
bottom: 0;
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

@media screen and (max-width: 425px) {
    flex-direction: column;
}
`
export const Rule = styled.p`
font-size: 2rem;
text-align: center;
margin: 0 2rem;

@media screen and (max-width: 900px) {
    font-size: 1rem;
}
@media screen and (max-width: 425px) {
    margin: 0.5rem 0;
}
`
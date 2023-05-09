import styled from "styled-components";

export const ResultWrapper = styled.div`
height: auto;
width: 250px;
padding: 1rem 0;
background-color: var(--theme-secondary);
opacity: ${(props) => (props.selected ? "1" : "0")};
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
pointer-events: ${(props) => (props.selected ? "auto" : "none")};
`
export const ResultText = styled.h1`
font-size: 3rem;
`
export const ResetButton = styled.button`
padding: 1rem;
cursor: pointer;
`
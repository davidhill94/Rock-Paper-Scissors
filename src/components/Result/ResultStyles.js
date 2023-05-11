import styled, { keyframes } from "styled-components";

const delayLoad = keyframes`
 0% { opacity: 0; }
 50% { opacity: 0; }
 100% { opacity: 1; }
`

export const ResultWrapper = styled.div`
height: auto;
width: 250px;
padding: 1rem 0;
background-color: var(--theme-secondary);
opacity: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: ${(props) => (props.selected ? "flex" : "none")};
flex-direction: column;
align-items: center;
justify-content: center;
pointer-events: ${(props) => (props.selected ? "auto" : "none")};
animation-name: ${delayLoad};
animation-duration: 1s;
animation-delay: 5s;
animation-fill-mode: forwards;
border: 2px solid var(--theme-tertiary);
box-shadow: 0px 0px 10px var(--theme-tertiary);
`
export const ResultText = styled.h1`
font-size: 3rem;
`
export const ResetButton = styled.button`
padding: 0.5rem;
background-color: transparent;
color: var(--theme-tertiary);
cursor: pointer;
border: 2px solid var(--theme-tertiary);

&:hover {
    box-shadow: 0px 0px 10px var(--theme-tertiary);
}
`
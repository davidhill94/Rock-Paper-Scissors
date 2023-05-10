import styled, { keyframes } from "styled-components";

const arrowBounce = keyframes`
0% { transform: translateY(0); }
50% { transform: translateY(-10px); }
100% { transform: translateY(0); }
`
const arrowDrop = keyframes`
0% { transform: translateY(0); }
50% { transform: translateY(10px); }
100% { transform: translateY(0); }
`

export const RulesBtn = styled.button`
padding: 1rem;
font-size: 1.5rem;
background-color: transparent;
border: none;
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
z-index: 99;
color: var(--theme-tertiary);
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const ArrowSpan = styled.span`
animation-name: ${(props) => (props.hover && !props.modal ? arrowBounce : props.hover && props.modal ? arrowDrop : null)};
animation-duration: 1s;
animation-iteration-count: infinite;
transform: translateY(0);
`
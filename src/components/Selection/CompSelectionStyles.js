import styled, { keyframes } from "styled-components";

const delayLoadTimer = keyframes`
 0% { opacity: 0; }
 25% { opacity: 0; }
 50% { opacity: 1; }
 100% { opacity: 0; }
`
const delayLoadIcon = keyframes`
0% { opacity: 0; }
25% { opacity: 0; }
50% { opacity: 1; }
100% { opacity: 1; }
`


export const CompSelectionWrapper = styled.div`
width: 50.5%;
height: 100%;
position: absolute;
top: 0;
right: ${(props) => (props.selected ? "0vw" : "-50.5%")};
transition: 0.5s ease;
background-color: var(--theme-fourth);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 475px) {
  width: 100%;
  height: 50.5%;  
  bottom: 0;
  top: 50%;
  right: ${(props) => (props.selected ? "0vw" : "-100%")};
  justify-content: start;
}
`
export const H1Text = styled.h1`
font-size: 2.5rem;

@media screen and (max-width: 425px) {
  font-size: 2rem;
  margin-top: 1.5rem;
}
`
export const Countdown = styled.div`
position: absolute;
font-size: 8rem;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity: 0;
&.one {
    animation-name: ${delayLoadTimer};
    animation-duration: 1s;
    animation-delay: 3s;
  }
&.two {
    animation-name: ${delayLoadTimer};
    animation-duration: 1s;
    animation-delay: 2s;
  }
&.three {
    animation-name: ${delayLoadTimer};
    animation-duration: 1s;
    animation-delay: 1s;
  }
`
export const CompPickWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
opacity: 0;
animation-name: ${delayLoadIcon};
animation-duration: 1s;
animation-delay: 4s;
animation-fill-mode: forwards;
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

@media screen and (max-width: 475px) {
  height: 100px;
  width: 100px;
  font-size: 3.5rem;
  margin: 0.5rem;
}
@media screen and (max-width: 300px) {
  height: 90px;
  width: 90px;
  font-size: 2.5rem;
  margin: 0.5rem;
}
@media screen and (max-width: 425px) and (max-height: 740px){
  height: 140px;
  width: 140px;
  font-size: 4rem;
  margin: 0.5rem;
} 
@media screen and (max-width: 300px) and (max-height: 655px){
  height: 750px;
  width: 75px;
  font-size: 2rem;
  margin: 0.5rem;
}  
`
export const SelectedText = styled.p`
font-size: 3rem;

@media screen and (max-width: 420px) {
  font-size: 2.5rem;
} 
@media screen and (max-width: 300px) {
  font-size: 2rem;
} 
`
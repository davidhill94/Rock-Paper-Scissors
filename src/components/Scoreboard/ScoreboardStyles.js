import styled from "styled-components";

export const ScoreboardWrapper = styled.div`
font-size: 3rem;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 2rem;
}
@media screen and (max-width: 425px) {
    font-size: 1.5rem;
}
@media screen and (max-width: 320px) {
    font-size: 1rem;
}
`
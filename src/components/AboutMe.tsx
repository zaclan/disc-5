import styled from "styled-components";

const StyledDiv=styled.div `
    width: 80%;
    margin: 0 auto;
    background-color: antiquewhite; 
    color: #535bf2;
    display: flex; 
    flex-dire3ction: column;
    justify-content: center; 
    align-items: center;
`;

export default function AboutMe() {
    return(
        <StyledDiv>
            <h1>I am a Student.</h1>
            <p>I really enjoy learning in this class.</p>
        </StyledDiv>
    );
}
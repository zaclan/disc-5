import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader=styled.header`
    width: 100%;
    background-color: #888888;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
`;

const StyledTitle=styled.h2`
    color: bisque;
`;

const StyledNav=styled.nav`
    
    justify-content: space-between;
    background-color: blue;
`;

const StyledList=styled.ul`
    display: flex; 
    flex-direction: row; 
    padding-left: 0;
    list-style: none;
`;

const StyledLink=styled(Link)`
    text-decoration: none; 
    text-transform: capitalize; 
`;

export default function Header() {
    return(
        <StyledHeader>
            <StyledTitle>React Intro</StyledTitle>
            <StyledNav>
                <StyledList>
                    <li>
                        <StyledLink to={`/`}>Home</StyledLink>
                    </li>

                    <li>
                        <StyledLink to={`/about`}>About Me</StyledLink>
                    </li>
                </StyledList>
            </StyledNav>
        </StyledHeader>
    )
}
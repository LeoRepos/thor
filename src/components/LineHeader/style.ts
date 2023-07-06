import { styled } from "styled-components";

export const LineHeaderContainer = styled.div`
    background-color: #4D2952;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;

export const LineTextAndLinkContainer = styled.div`
    display: flex;
`;

export const Container = styled.div`
    background-color: red;

`;

export const LineHeaderText = styled.div`
    border-right: 1px solid #FFF;
    font-size: 0.9rem;
    padding: 0 0.3rem;
`;

export const LineHeaderLink = styled.div`
    padding: 0 0.1rem 0 0.3em;
    font-size: 0.9rem;
    border-bottom: 1px solid; 
    a {
        text-decoration: none;
        color: #FFF;
    }
`;
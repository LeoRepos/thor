import styled, {createGlobalStyle} from "styled-components";
import {inter} from "../fonts";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${inter.fontFamily};
        font-weight: ${inter.fontWeight.regular};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: #5d3b81 transparent;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #5d3b81;
        border-radius: 10px;
        border: 3px solid transparent;
    }
`;

export const PageMainContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 2rem;
    background-color: #f6f6f6;
`;

export const PageContainer = styled.div`
    display: flex;
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
`;

export const Page = styled.div``;

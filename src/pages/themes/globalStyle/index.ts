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
        scrollbar-color: #4D2952 transparent;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #4D2952;
        border-radius: 10px;
        border: 3px solid transparent;
    }
`;

export const PageFullWidthContent = styled.div`
    max-width: 100vw;
`;

export const PageContainer = styled.div`
    max-width: 100vw;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Page = styled.div`
    width: 1430px;
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    background: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.color.black};
    font-family: "Roboto";
    }

    a {
    color: ${({theme}) => theme.color.black};
    text-decoration: none;
    }
`;

export default GlobalStyle;
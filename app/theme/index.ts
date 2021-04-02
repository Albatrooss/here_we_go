import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;
            third: string;
    
            white: string;
            black: string;

            error: string;
        },
        spacing: {
            nav: string
        }
    }
}

const theme: DefaultTheme = {
    color: {
        primary: '#6EA665',
        secondary: '#9BBF95',
        third: '#79BF65',
        
        white: '#F0F2F2',
        black: '#0D0D0D',

        error: '#FF9494',
    },
    spacing: {
        nav : '20px'
    }
}

export default theme;
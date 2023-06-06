import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFFFFF',
    text: '#000000',
    background: '#24272B',
    colorActive: '#89634B',
    transpText: 'rgba(0,0,0,0.6)',
    lessTranspText: 'rgba(0,0,0,0.8)',
    lightColor2: '#f4f8fa',
    darkColor3: '#000e29',
    
    color1: "#2196F3",
    color2: "#0092DA",
    color3: "#0039A6",
    color4: "#004BA8",
    color5: "#004B93",
    color6: "#3E78B2",
    color7: "#F0F0F0",
    color8: "#4A525A",
    color9: "#24272B",
    color10: "#07070A"
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    background: '#363537',
    
    color1: "#2196F3",
    color2: "#0092DA",
    color3: "#0039A6",
    color4: "#004BA8",
    color5: "#004B93",
    color6: "#3E78B2",
    color7: "#F0F0F0",
    color8: "#4A525A",
    color9: "#24272B",
    color10: "#07070A"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${( { theme } ) => theme.body};
        color: ${({ theme }) => theme.text};
        //border-color: ${({ theme }) => theme.bordercolor};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`
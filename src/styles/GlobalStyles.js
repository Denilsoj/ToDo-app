import styled,{ createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body {
    background-color: #C8FFFF;
    overflow-y: hidden;
    overflow-x: hidden;
}
li{
    list-style: none;
}
a {
    text-decoration: none;
}
`;
export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`

export default GlobalStyle; 
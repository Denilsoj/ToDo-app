import styled from "styled-components";

export const SideBarContainer = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
background-color: #C8FFFF;
height: 100vh;
border-right: 2px solid #FFF;
`
export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
padding-top: 30px;
img{
    width: 46px;
    height: 51px;
}
`;

export const Title = styled.h1`
font-size: 50px;
color: #54D2FE;
font-weight: bold;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #FFF;
text-align: center;
`;

export const Nav = styled.nav`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 150px;
`;

export const Menu = styled.div`
width: 350px;
height: 61px;
color: #54D2FE;
font-weight: bold;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
border-radius: 30px;
background-color: #FFF;
position: relative;
cursor: pointer;
.tasks{
    width: 28px;
    height: 22px;
    color: #ccc;
    position: absolute;
    left: 60px;
    top: 18.5px;
}
#tasks-favorite{
    color: #FFF500;
}
#tasks-check{
    color: #9BDE5D;
}
`;
import styled from "styled-components";


export const MainContainer = styled.main`
position: absolute;
top: 180px;
left: 450px;
width: 1000px;
padding-left: 30px;
`;

export const List = styled.ul`
width: 1400px;
display: flex;
margin: 0 auto;
flex-wrap: wrap;
gap: 20px;
`;
export const Item = styled.li`
width: 400px;
height: 69px;
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
background-color: #FFF;
border-radius: 10px;
font-size: 15px;
 span .check{
    width: 15px;
    height: 15px;
    cursor: pointer;
}
span .checked {
    color: red;
    width: 15px;
    height: 15px;
    cursor: pointer;
}
`;
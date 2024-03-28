import styled from "styled-components";

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
import { useEffect, useState } from 'react';
import { FaRegCircleCheck, FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";
import { MainContainer, List, Item } from './styled';


export default function Main() {
    const [tasks, setTasks] = useState([
        {
            id:0,
            description: 'Fazer trabalho',
            check: true
        },
        {
            id:1,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false
        },
        {
            id:2,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false
        },
        {
            id:3,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false
        },
        {
            id:4,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false
        },
        {
            id:5,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false
        },
    ]);
    useEffect(() => {
        async function getData(){
        
        }
        getData();
    }, []);
    if(tasks.length > 0){
        return(
            <MainContainer>
                <List>
                {
                tasks.map((task) => (
                    <Item key={task.id}>
                        <span>{task.check? <FaCircleCheck className='checked'/> : <FaRegCircleCheck className='check'/>}</span>
                        <span>{task.description}</span>
                    </Item>
                ))
                }
            </List>
            </MainContainer>
        )
    }
    return(
        <MainContainer>
            <h1>Carregando...</h1>
        </MainContainer>
    );
}
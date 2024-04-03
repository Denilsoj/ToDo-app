import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tasks from '../Tasks';
import { MainContainer, List } from './styled';


export default function Main({routerTasks}) {
    const [tasks, setTasks] = useState([
        {
            id:0,
            description: 'Fazer trabalho',
            check: true,
            favorite: false,
        },
        {
            id:1,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false,
            favorite: true,
        },
        {
            id:2,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false,
            favorite: false,
        },
        {
            id:3,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false,
            favorite: false,
        },
        {
            id:4,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false,
            favorite: false,
        },
        {
            id:5,
            description: 'Fazer trabalho para a faculdade até amanhã',
            check: false,
            favorite: false,
        },
    ]);
    useEffect(() => {
        async function getData(){
        
        }
        getData();
    }, []);

    switch (routerTasks){
        case 'tasks': return(
            <MainContainer>
                <List>
                    <Tasks typeTasks='tasks' listTasks={tasks}/>
                </List>
            </MainContainer>
        );
        case 'favorite': return(
            <MainContainer>
                <List>
                    <Tasks typeTasks='favorite' listTasks={tasks}/>
                </List>
            </MainContainer>
        );
        case 'finished': return(
            <MainContainer>
                <List>
                    <Tasks typeTasks='finished' listTasks={tasks}/>
                </List>
            </MainContainer>
        );
    }
   
}

Main.propTypes = {
    routerTasks: PropTypes.string,
}

import PropTypes from 'prop-types';
import { FaRegCircleCheck, FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";
import { Item } from './styled';

export default function Tasks({typeTasks, listTasks}){
    const tasks = listTasks.filter( task => !task.check ) 
    const favoriteTasks = listTasks.filter( task => task.favorite )
    const finishedTasks = listTasks.filter( task => task.check )
   switch(typeTasks){
    case 'tasks': return(
        <>
            {
            tasks.map((task) => (
                <Item key={task.id}>
                    <span>{task.check? <FaCircleCheck className='checked'/> : <FaRegCircleCheck className='check'/>}</span>
                    <span>{task.description}</span>
                </Item>
            ))
            }
        </>
    );
    case 'favorite': return(
        <>
            {
            favoriteTasks.map((task) => (
                <Item key={task.id}>
                    <span>{task.check? <FaCircleCheck className='checked'/> : <FaRegCircleCheck className='check'/>}</span>
                    <span>{task.description}</span>
                </Item>
            ))
            }
        </>
    );
    case 'finished': return(
        <>
            {
            finishedTasks.map((task) => (
                <Item key={task.id}>
                    <span>{task.check? <FaCircleCheck className='checked'/> : <FaRegCircleCheck className='check'/>}</span>
                    <span>{task.description}</span>
                </Item>
            ))
            }
        </>
    );
    
   }
}



Tasks.propTypes = {
    typeTasks: PropTypes.string.isRequired,
    listTasks: PropTypes.array.isRequired,
}
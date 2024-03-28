import PropTypes from 'prop-types';
import { FaRegCircleCheck, FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";
import { Item } from './styled';

export default function Tasks({typeTasks, listTasks}){
   switch(typeTasks){
    case 'tasks': return(
        <>
            {
            listTasks.map((task) => (
                <Item key={task.id}>
                    <span>{task.check? <FaCircleCheck className='checked'/> : <FaRegCircleCheck className='check'/>}</span>
                    <span>{task.description}</span>
                </Item>
            ))
            }
        </>
    )
    
   }
}



Tasks.propTypes = {
    typeTasks: PropTypes.string.isRequired,
    listTasks: PropTypes.array.isRequired,
}
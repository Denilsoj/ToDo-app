import { Link } from 'react-router-dom';
import { SideBarContainer, Title, Header, Nav, Menu } from './styled';
import { FaClipboardList, FaStar, FaCheck } from "react-icons/fa6";
import listIcom from '/listIcon.svg';

export default function SideBar() {
    return(
        <SideBarContainer>
            <Header>
                <img src={listIcom} alt="logo" />
                <Title>To-Do</Title>
            </Header>
            <Nav>
                <Link to='/'>
                    <Menu><FaClipboardList className='tasks'/>Tarefas</Menu>
                </Link>
                <Link to='/favoritas'>
                    <Menu><FaStar className='tasks' id='tasks-favorite'/>Favoritos</Menu>
                </Link>
                <Link to='/finalizadas'>
                    <Menu><FaCheck className='tasks' id='tasks-check'/>Finalizadas</Menu>
                </Link>
            </Nav>
        </SideBarContainer>
    );
}
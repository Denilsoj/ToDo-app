import { SideBarContainer, Title, Header, Nav, Menu } from './styled';
import { FaClipboardList, FaStar, FaCheck } from "react-icons/fa6"
import listIcom from '../../assets/listIcon.svg'

export default function SideBar() {
    return(
        <SideBarContainer>
            <Header>
                <img src={listIcom} alt="logo" />
                <Title>To-Do</Title>
            </Header>
            <Nav>
                <Menu><FaClipboardList className='tasks'/>Tarefas</Menu>
                <Menu><FaStar className='tasks' id='tasks-favorite'/>Favoritos</Menu>
                <Menu><FaCheck className='tasks' id='tasks-check'/>Finalizadas</Menu>
            </Nav>
        </SideBarContainer>
    );
}
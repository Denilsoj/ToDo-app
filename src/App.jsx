import {
Routes,
Route,
} from 'react-router-dom';

import SideBar from "./components/SideBar"
import  Header  from "./components/Header"
import GlobalStyle, { Container } from "./styles/GlobalStyles"
import Main from "./components/Main"
import Page404 from './components/Page404/Index';

function App() {
  return (
    <Container>
      <SideBar/>
      <Header/>
      <Routes>
        <Route path='/' element={ <Main routerTasks='tasks'/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <GlobalStyle/>
    </Container>

  )
}

export default App

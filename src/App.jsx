import SideBar from "./components/SideBar"
import  Header  from "./components/Header"
import GlobalStyle, { Container } from "./styles/GlobalStyles"
import Main from "./components/Main"

function App() {
  return (
    <Container>
      <SideBar/>
      <Header/>
      <Main/>
      <GlobalStyle/>
    </Container>
  )
}

export default App

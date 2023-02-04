import Home from './Pages/Home';
import Event from './Pages/Event';
import Blog from './Pages/Blog';
import Inventory from './Pages/Inventory';
import Team from './Pages/Team';
import Contacts from './Pages/Contacts';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const App = () => {

  const theme = {
    colors:{
      heading:"rgb(24,24,29)",
      text:"rgb(24,24,29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249,249,255)",
      footer_bg:"#0a1435",
      btn:"rgb(98,84,243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg,rgb(132,144,255) 0%,rgb(98,189,252) 100%",
      shadow:"rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{mobile:"768px",tab:"998px"},
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/event' element={<Event />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;

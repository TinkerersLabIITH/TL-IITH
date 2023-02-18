import Home from './Pages/Home';
import Event from './Pages/Event';
import Blog from './Pages/Blog';
import Inventory from './Pages/Inventory';
import Team from './Pages/Team';
import Contacts from './Pages/Contacts';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navigationbar />
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
    </>
  )
};

export default App;

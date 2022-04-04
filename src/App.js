
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

import Reviews from './components/Reviews/Reviews';

function App() {
  return (
  <>
     <Navbar> </Navbar>
    <Routes>
      <Route path='/' element ={ <Home></Home>}> </Route>
     
      <Route path='/review' element={<Reviews> </Reviews> }></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/about' element={<About> </About>}></Route>
      <Route path='*' element={<NotFound> </NotFound>}></Route>

    </Routes>
  </>
  );
}

export default App;

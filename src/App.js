import React from 'react';
import NavBar from '../src/Component/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Component/Views/Home';
import Indumentaria from './Component/Views/Indumentaria';
import Calzado from './Component/Views/Calzado';
import Accesorios from './Component/Views/Accesorios';
import Navigation from './Component/Navigation';
import DetailItem from './Component/Views/DetailItem';
import Error from './Component/Views/Error';


const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <div>
          <Navigation />
        </div>       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/indumentaria' element={<Indumentaria />} />
          <Route path='/calzado' element={<Calzado />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path='/detail/:id' element={<DetailItem />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

      <ItemListContainer />
    </>
    
  )
};

export default App;

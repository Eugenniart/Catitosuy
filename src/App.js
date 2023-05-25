import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Adoptar from './Adoptar';
import Navbar from './Navbar';
import Cat from './Cat';
import Catrequisitos from './Catrequisitos';
import Procesoadop from './Procesoadop';
import Dog from './Dog';
import Dogrequisitos from './Dogrequisitos';
import Donar from './Donar';
import Economicas from './Economicas';
import Materiales from './Materiales';
import Contacto from './Contacto';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
        </>} />
        <Route path="/adoptar" element={<>
          <Adoptar />
        </>} />
        <Route path="/cat" element={<>
          <Cat />
        </>} />
        <Route path="/catrequisitos" element={<>
          <Catrequisitos />
        </>} />
        <Route path="/Procesoadop" element={<>
          <Procesoadop />
        </>} />
        <Route path="/Dog" element={<>
          <Dog />
        </>} />
        <Route path="/Dogrequisitos" element={<>
          <Dogrequisitos />
        </>} />
        <Route path="/Donar" element={<>
          <Donar />
        </>} />
        <Route path="/Economicas" element={<>
          <Economicas />
        </>} />
        <Route path="/Materiales" element={<>
          <Materiales />
        </>} />
        <Route path="/Contacto" element={<>
          <Contacto />
        </>} />
      </Routes>
    </Router>
  );
}


export default App;


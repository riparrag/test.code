import React from 'react';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import MatiComponent from './components/MatiComponent';
import PrincipalComponent from './components/PrincipalComponent';
import Test from "./components/Test";

function App() {

  return (
    <div>
      <Router>
        <div>
          <Link to='/test'>
            <Button>Test</Button>
          </Link>
          <Link to='/hijos'>
            <Button>Home</Button>
          </Link>
        </div>

        <Routes>
          <Route path='/test' element={<Test/>} />
          <Route path='/hijos' element={<PrincipalComponent/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
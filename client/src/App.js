import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>

        <div className='container'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

// App.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/profile/:username" element={<ProfilePage/>} />
    </Routes>

    </div>
   
    
    
  );
}

export default App;
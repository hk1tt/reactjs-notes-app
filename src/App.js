import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeNote from './pages/HomeNote';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import './index.css';


const App = () => {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNote/>} />
          <Route path="/create-note" element={<CreateNote/>} />
          <Route path="/edit-note/:id" element={<EditNote/>} />
          {/* <Route path="/" element={<HomeNote/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )  
}

export default App
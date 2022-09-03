import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Loginpage from './pages/Loginpage';
//import CharacterPage from './pages/CharacterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/character/:cid" element={<CharacterPage />}></Route>
    </Routes>
  </BrowserRouter>
);
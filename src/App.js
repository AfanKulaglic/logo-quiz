import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StartPage } from './Pages/StartPage';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { GamePage } from './Pages/GamePage';
import { MultiplayerLobbyPage } from './Pages/MultiplayerLobbyPage';
import { MultiplayerRoom } from './Pages/MultiplayerRoom';
import { EndGame } from './Pages/EndGame';
import { getAuth } from "firebase/auth";
import { useState } from 'react';

function App() {
  const auth = getAuth();
  const user = auth.currentUser;  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user?
          <>
            <Route exact path='/start' element={<StartPage/>} />
          </>
          :
          <>
            <Route exact path='/' element={<LoginPage/>} />
            <Route path='/start' element={<StartPage/>} />
          </>
          }
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/game' element={<GamePage/>} />
          <Route path='/multiplayerLobby' element={<MultiplayerLobbyPage/>} />
          <Route path='/multiplayerRoom' element={<MultiplayerRoom/>} />
          <Route path='/endGame' element={<EndGame/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

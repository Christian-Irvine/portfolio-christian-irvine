import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Programming from './components/Programming';
import GameDevelopment from './components/GameDevelopment';
import Youtube from './components/Youtube';
import Music from './components/Music';

const App: React.FC =() => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />}/>
          <Route path="programming" element={<Programming />}/>
          <Route path="game-development" element={<GameDevelopment />}/>
          <Route path="youtube" element={<Youtube />}/>
          <Route path="music" element={<Music />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

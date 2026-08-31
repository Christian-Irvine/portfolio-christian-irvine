import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Programming from './components/Programming';
import GameDevelopment from './components/GameDevelopment';
import Youtube from './components/Youtube';
import Music from './components/Music';
import FishShooter2D from './components/FishShooter2D';

const App: React.FC =() => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="*" element={<NotFound />}/>
          <Route path="" element={<Home />}/>
          <Route path="programming" element={<Programming />}/>
          <Route path="game-development" element={<SideBar />}>
            <Route path="" element={<GameDevelopment />}/>
            <Route path="2d-fish-shooter" element={<FishShooter2D />}/>
          </Route>
          <Route path="youtube" element={<Youtube />}/>
          <Route path="music" element={<Music />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

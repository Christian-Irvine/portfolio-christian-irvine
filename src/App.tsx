import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';

import { NavPair } from './Utils';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Programming from './components/Programming';
import GameDevelopment from './components/GameDevelopment';
import Youtube from './components/Youtube';
import Music from './components/Music';

import FishShooter2D from './components/FishShooter2D';
import GodSaveTheQueen from './components/GodSaveTheQueen';

const App: React.FC =() => {
  const gameDevSubPages: Array<NavPair> = [
    new NavPair("", "Game Development"),
    new NavPair("2d-fish-shooter", "2D Fish Shooter"),
    new NavPair("god-save-the-queen", "God Save The Queen"),
  ]

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="*" element={<NotFound />}/>
          <Route path="" element={<Home />}/>
          <Route path="programming" element={<Programming />}/>
          <Route path="game-development" element={<SideBar subPages={gameDevSubPages} />}>
            <Route path="" element={<GameDevelopment />}/>
            <Route path={gameDevSubPages[1].key} element={<FishShooter2D />}/>
            <Route path={gameDevSubPages[2].key} element={<GodSaveTheQueen />}/>
          </Route>
          <Route path="youtube" element={<Youtube />}/>
          <Route path="music" element={<Music />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

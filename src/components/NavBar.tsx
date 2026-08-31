import '../App.css'

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import menuIcon from "../assets/menu.png"

import useWindowDimensions from "../hooks/useWindowDimensions"

class NavPair {
  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  key: string;
  name: string;
}

const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();
  const maxWidth: number = 1024;

  const routes: Array<NavPair> = [
    //new NavPair("", "Home"), // Uncomment if you want a home button - the name functions as one
    new NavPair("programming", "Programming"),
    new NavPair("game-development", "Games"),
    new NavPair("youtube", "Youtube"),
    new NavPair("music", "Music"),
  ];

  const [showNav, setShowNav] = useState<boolean>(false);

  const handleNavDisplay = () => {
    setShowNav(!showNav);
  }

  useEffect(() => {
    if (width > maxWidth)
      setShowNav(false);
  }, [width]);

  return (
    <>
      <div className="flex justify-end w-full navbar min-h-1/8">
        <Link className="mr-auto px-5 flex items-center" to={`/`}>
          <h2>Christian</h2>
        </Link>
        {width > maxWidth ? (
          <>
            {routes.map((route: NavPair) => (
              <Link to={`/${route.key}`} key={route.key}>
                <div className="w-50 nav-button min-h-full flex items-center justify-center">
                  <h4>{route.name}</h4>
                </div>
              </Link>
            ))}
          </>
       ) : (
        <button onClick={() => handleNavDisplay()} className="aspect-square nav-button">
          <img className="p-7" src={menuIcon} alt="A menu dropdown"/>
        </button>
       )}
      </div>
      {showNav && width <= maxWidth &&
        <div className="flex flex-col">
            {routes.map((route: NavPair) => (
              <Link to={`/${route.key}`} key={route.key} onClick={() => handleNavDisplay()}>
                <div className="w-full nav-button p-5 flex items-center">
                  <h4>{route.name}</h4>
                </div>
              </Link>
            ))}
        </div>
      }
      <Outlet />
    </>
  );
};

export default NavBar;
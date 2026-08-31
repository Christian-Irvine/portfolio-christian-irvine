import '../App.css'

import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import useWindowDimensions from "../hooks/useWindowDimensions"
import { NavPair } from '../Utils';

export interface SideBarProps {
  subPages: Array<NavPair>;
}

const SideBar: React.FC<SideBarProps> = (
  props: SideBarProps,
) => {
  const { width } = useWindowDimensions();
  const maxWidth: number = 1024;

  const [showSide, setShowSide] = useState<boolean>(true);

  const handleSideDisplay = () => {
    setShowSide(!showSide);
  }

  useEffect(() => {
    setShowSide(width > maxWidth);
  }, [width]);

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-7/8">
        {showSide ? (
        <div className="nav-color lg:w-1/7 min-h-7/8">
          <button className="nav-button w-full p-4" onClick={() => handleSideDisplay()}>
            <h4>Close</h4>
          </button>
          {props.subPages.map((route: NavPair) => (
            <Link to={`./${route.key}`} key={route.key}>
              <div className="nav-button w-full p-4">
                <h4>{route.name}</h4>
              </div>
            </Link>
          ))}
        </div>
        ) : (
          <button className="nav-button w-9 hover:w-12 h-15 mt-5 z-10 fixed rounded-e-full" onClick={() => handleSideDisplay()}>
            <h4>{">"}</h4>
          </button>
        )}
        <div className="lg:w-full">
          <Outlet />
        </div>
      </div>

      
      
    </>
  )
}

export default SideBar

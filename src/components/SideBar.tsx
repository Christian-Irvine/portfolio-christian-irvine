import '../App.css'

import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

import useWindowDimensions from "../hooks/useWindowDimensions"

import menuIcon from "../assets/menu.png"

const SideBar: React.FC =() => {
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
        <div className="bg-green-300 lg:w-1/7 min-h-7/8">
          <button className="nav-button w-full p-4" onClick={() => handleSideDisplay()}>
            <h4>Close Side</h4>
          </button>
          <p>Hey this is a sidebar</p>
        </div>
        ) : (
          <button className="nav-button w-10 h-15 mt-5 z-10 fixed rounded-e-full" onClick={() => handleSideDisplay()}>
            <h4>{">"}</h4>
          </button>
        )}
        <div className="bg-orange-300 lg:w-full">
          <Outlet />
        </div>
      </div>

      
      
    </>
  )
}

export default SideBar

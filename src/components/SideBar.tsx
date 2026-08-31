import '../App.css'

import { Outlet } from "react-router-dom";

const SideBar: React.FC =() => {
  return (
    <>
      <p>Hey this is a sidebar</p>
      <Outlet />
    </>
  )
}

export default SideBar

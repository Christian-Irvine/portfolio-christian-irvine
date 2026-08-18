import '../App.css'

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

class NavPair {
  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  key: string;
  name: string;
}

const NavBar: React.FC = () => {
  const routes: Array<NavPair> = [
    //new NavPair("", "Home"), // Uncomment if you want a home button - the name functions as one
    new NavPair("programming", "Programming"),
    new NavPair("game-development", "Games"),
    new NavPair("youtube", "Youtube"),
    new NavPair("music", "Music"),
  ];

  return (
    <>
      <div className="flex justify-end w-full navbar">
        <Link className="mr-auto px-5" to={`/`}>
          <h1>Christian</h1>
        </Link>
        {routes.map((route: NavPair) => (
          <Link to={`/${route.key}`} key={route.key}>
            <div className="w-50 py-8 navbar-button">
              <h3>{route.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
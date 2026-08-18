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
    new NavPair("", "Home"),
    new NavPair("programming", "Programming"),
    new NavPair("game-development", "Game Development"),
    new NavPair("youtube", "Youtube"),
    new NavPair("music", "Music"),
  ];

  return (
    <>
      <div className="bg-slate-700 flex justify-evenly w-full">
            {routes.map((route: NavPair) => (
                <Link to={`/${route.key}`}>
                  <div className="px-15 py-8 hover:bg-slate-800">
                    {route.name}
                  </div>
                </Link>
            ))}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
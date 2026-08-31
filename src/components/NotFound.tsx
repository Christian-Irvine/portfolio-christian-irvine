import '../App.css'

import { Link } from "react-router-dom";

const NotFound: React.FC =() => {
  return (
    <>
      <h1 className="pt-30 pb-12">404</h1>
      <Link to={`/`}>
        <p>Sorry this page doesn't exist, please click here to go back home</p>
      </Link>
    </>
  )
}

export default NotFound

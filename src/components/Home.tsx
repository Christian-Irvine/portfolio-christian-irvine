import '../App.css'
import tempme from "../assets/tempme.png"

const Home: React.FC =() => {
  return (
    <div className="grid grid-cols-2">
      <div className="pl-15 pt-10 text-left">
        <h1 className="pt-15">Christian Irvine</h1>
        <h3 className="pt-5 pb-15">Programmer, Game Developer, Youtuber, Musician.</h3>
        <p>Hey this is where the information about me would go.</p>
      </div>
      <div className="pl-0 pt-20 pr-50">
        <img src={tempme} alt="A beautiful picture of Christian Irvine"/>
      </div>

    </div>
  )
}

export default Home

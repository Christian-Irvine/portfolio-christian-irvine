import '../App.css'
import tempme from "../assets/tempme.png"

const Home: React.FC =() => {
  return (
    <div className="flex flex-col lg:flex-row max-h-7/8">
      <div className="lg:w-3/5 text-left pl-5 lg:pl-10">
        <h1 className="pt-15">Christian Irvine</h1>
        <h3 className="pt-5 pb-15">Programmer, Game Developer, Youtuber, Musician.</h3>
        <p>Hey this is where the information about me would go.</p>
      </div>
      <div className="lg:w-2/5 pt-10">
        <img className="max-h-full" src={tempme} alt="A beautiful picture of Christian Irvine"/>
      </div>

    </div>
  )
}

export default Home

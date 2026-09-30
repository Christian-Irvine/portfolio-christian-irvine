import '../App.css'
import PageColumn from './PageColumn'

const GameDevelopment: React.FC =() => {
  return (
    <>
      <h1 className="p-15">Game Development</h1>
      <PageColumn>
        <section className="pt-5 pb-5">
          <p>
            Hey! I am a freshly graduated indie game developer who loves all things gaming!
          </p>
        </section>
        <section className="pt-5 pb-5">
          <p>
            I grew up playing video games and when I realised in high school that I could make my own, from that moment I was hooked.
          </p>
          <p>
            I taught myself the basics of the Unity game engine before furthering my studies at Otago Polytechnic.
            While there I built up a fantastic set of IT skills but specifically focused in Game Development.
            I significantly expanded my knowledge in Unity making desktop, mobile and VR games.
            And also got some experience with the up and coming Godot engine.
          </p>
        </section>
        <section className="pt-5 pb-5">
          <p>
            In my time studying I created a whole portfolio of games both in my free time and for study.
            I have also competed in several Game Jams, notably the Brackeys and GMTK game jams.
          </p>
        </section>
      </PageColumn>
    </>
  )
}

export default GameDevelopment

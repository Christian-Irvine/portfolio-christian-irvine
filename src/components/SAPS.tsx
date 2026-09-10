import '../App.css'
import Carousel from './Carousel'
import { CarouselItem } from '../Utils';

const SAPS: React.FC =() => {
  const carouselContents: Array<CarouselItem> = [
    new CarouselItem("https://www.youtube.com/embed/4Snu6IJurjU", "SAPS Gameplay Trailer", "youtube"),
    new CarouselItem("/images/saps/sapsLogo.png", "SAPS Gameplay Image", "image"),
  ]

  return (
    <>
      <h1 className="p-5">S.A.P.S</h1> 
      <Carousel contents={carouselContents}/>

      <div className="flex justify-center">
        <div className="w-2/3 pt-15 pb-15 text-left leading-8">
          <p>
            Saps is an action steal VR game developed by me and a few other students as our capstone project at Otago Polytechnic.
            The goal of the game is to sneak around and find a target with specific information given to you on a card.
            Once you have found your guy you have to assassinate him stealthily without getting caught.
            However, if you get detected it isn't over yet as you can still escape!
          </p>
        </div>

      </div>
    </>
  )
}

export default SAPS

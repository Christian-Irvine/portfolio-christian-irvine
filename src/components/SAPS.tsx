import '../App.css'
import Carousel from './Carousel'
import { CarouselItem } from '../Utils';

const SAPS: React.FC =() => {
  const carouselContents: Array<CarouselItem> = [
    new CarouselItem("/images/saps/sapsLogo.png", "SAPS Gameplay Image", "image"),
    new CarouselItem("https://www.youtube.com/embed/4Snu6IJurjU", "SAPS Gameplay Trailer", "youtube"),
  ]

  return (
    <>
      <h1 className="p-5">S.A.P.S</h1> 
      <Carousel contents={carouselContents}/>
    </>
  )
}

export default SAPS

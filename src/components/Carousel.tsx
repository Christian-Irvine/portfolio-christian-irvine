import '../App.css'
import { useState } from 'react';
import { CarouselItem, Clamp } from '../Utils';

export interface CarouselProps {
  contents: Array<CarouselItem>;
}

const Carousel: React.FC<CarouselProps> = (
  props: CarouselProps,
) => {
  const [index, setIndex] = useState<number>(0);

  const moveSlide = (newIndex: number) => {
    newIndex = (newIndex + props.contents.length) % props.contents.length;
    console.log(newIndex)
    setIndex(newIndex);
  }

  return (
    <>
      <div className="carousel nav-hover">
        <button onClick={() => moveSlide(index - 1)} className="carousel-button flex justify-end items-center" >
          <h2 className="p-5">{"<"}</h2>
        </button>
        { props.contents[index].type === 'youtube' ? (
          <iframe className="h-full aspect-video" src={`${props.contents[index].url}?autoplay=1&mute=1&modestbranding=1`} title={props.contents[index].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>  
        ) : props.contents[index].type === 'image' ? (
          <img className="h-full aspect-video object-contain" src={props.contents[index].url} alt={props.contents[index].title}/>
        ) : (
          <p>Sorry there was an error rendering the content, please move to the next slide!</p>
        )
        }
        <button onClick={() => moveSlide(index + 1)} className="carousel-button flex justify-start items-center">
          <h2 className="p-5">{">"}</h2>
        </button>
      </div> 
    </>
  )
}

export default Carousel

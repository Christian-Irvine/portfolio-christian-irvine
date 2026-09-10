import '../App.css'
import { useState } from 'react';
import { CarouselItem } from '../Utils';

export interface CarouselProps {
  contents: Array<CarouselItem>;
}

const Carousel: React.FC<CarouselProps> = (
  props: CarouselProps,
) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <div className="carousel bg-green-500">
        { props.contents[index].type === 'youtube' ? (
          <iframe className="h-full aspect-video" src={`${props.contents[index].url}?autoplay=1&mute=1&modestbranding=1`} title={props.contents[index].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>  
        ) : props.contents[index].type === 'image' ? (
          <img className="h-full aspect-video object-contain" src={props.contents[index].url} alt={props.contents[index].title}/>
        ) : (
          <p></p>
        )
      
      }

      </div> 
    </>
  )
}

export default Carousel

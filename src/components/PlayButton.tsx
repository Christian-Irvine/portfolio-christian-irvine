import '../App.css'

export interface PlayButtonProps {
  displayName: string;
  url: string;
}

const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
  return (
    <>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className="play-button">
          <h3>{props.displayName}</h3>
        </button>
      </a>
    </>
  )
}

export default PlayButton

import '../App.css'

export interface PlayButtonProps {
  url: string;
}

const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
  return (
    <>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className="play-button">
          <h3>Play</h3>
        </button>
      </a>
    </>
  )
}

export default PlayButton

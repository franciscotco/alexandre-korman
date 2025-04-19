import videoAlexandre from "./videos/alexandre-korman.mp4";
import yt1518 from "./videos/yt-1518.mp4";
import tsunami from "./videos/tsunami.mp4";

import "./music-videoclip.css";

export function MusicVideoclip() {
  return (
    <div className="music-videoclip--video-container">
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" width={960} playsInline disablePictureInPicture autoPlay muted loop>
          <source src={yt1518} type="video/mp4" />
        </video>
      </div>
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/0FYTo8SbP7A"
        frameBorder={0}
      />
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/KJGvSjO85ek"
        frameBorder={0}
      />
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/RZ4jGzVaSG0"
        frameBorder={0}
      />
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/MTBy914HS7A"
        frameBorder={0}
      />
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={tsunami} type="video/mp4" />
        </video>
      </div>
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/U7cyQ4gWyqc"
        frameBorder={0}
      />
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/NzvjoJkH6QE"
        frameBorder={0}
      />
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/pSfpXI_6aAg"
        frameBorder={0}
      />
      <iframe
        className="app-global--video-rectangle"
        src="https://www.youtube-nocookie.com/embed/xeKR4YaZKRg"
        frameBorder={0}
      />
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

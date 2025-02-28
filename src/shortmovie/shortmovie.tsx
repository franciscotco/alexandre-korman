import videoAlexandre from "./videos/alexandre-korman.mp4";

import "./shortmovie.css";

export function Shortmovie() {
  return (
    <div className="shortmovie--video-container">
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

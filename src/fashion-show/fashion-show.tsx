import videoAlexandre from "./videos/alexandre-korman.mp4";

import "./fashion-show.css";

export function FashionShow() {
  return (
    <div className="fashion-show--video-container">
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

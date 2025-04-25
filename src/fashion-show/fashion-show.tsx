import haderlumpFallWinter from "./videos/haderlump-fall-winter.mp4";
import haderlumpSpringSummer from "./videos/haderlump-spring-summer.mp4";

import "./fashion-show.css";

export function FashionShow() {
  return (
    <div className="fashion-show--video-container">
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
          <source src={haderlumpFallWinter} type="video/mp4" />
        </video>
      </div>
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
          <source src={haderlumpSpringSummer} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

import videoAlexandre from "./videos/alexandre-korman.mp4";

import "./live-event-captation.css";

export function LiveEventCaptation() {
  return (
    <div className="live-event-captation--video-container">
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
      <div className="live-event-captation--big-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
      <div className="live-event-captation--video-layout">
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
      <div className="live-event-captation--video-layout">
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
    </div>
  );
}

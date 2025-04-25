import stoneOfCold from "./videos/stone-of-cold.mp4";
import blueAlien from "./videos/blue-alien.mp4";
import retro from "./videos/retro.mp4";
import amongNaiveWill from "./videos/among-naive-will.mp4";
import zeitDriverOk from "./videos/zeit-driver-ok.mp4";
import laria from "./videos/laria.mp4";

import "./live-event-captation.css";

export function LiveEventCaptation() {
  return (
    <div className="live-event-captation--video-container">
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
          <source src={stoneOfCold} type="video/mp4" />
        </video>
      </div>
      <div className="live-event-captation--big-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={blueAlien} type="video/mp4" />
        </video>
      </div>
      <div className="live-event-captation--video-layout">
        <div className="app-global--video-rectangle app-global--frame">
          <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
            <source src={retro} type="video/mp4" />
          </video>
        </div>
        <div className="app-global--video-rectangle app-global--frame">
          <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
            <source src={amongNaiveWill} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="live-event-captation--video-layout">
        <div className="app-global--video-rectangle app-global--frame">
          <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
            <source src={zeitDriverOk} type="video/mp4" />
          </video>
        </div>
        <div className="app-global--video-rectangle app-global--frame">
          <video className="app-global--video" width={920} playsInline disablePictureInPicture autoPlay muted loop>
            <source src={laria} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

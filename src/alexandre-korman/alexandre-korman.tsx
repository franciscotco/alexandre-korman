import { type ReactElement } from "react";

import videoAlexandre from "./videos/alexandre-korman.mp4";

import "./alexandre-korman.css";

export function AlexandreKorman(): ReactElement {
  return (
    <div className="alexandre-korman--container">
      <p className="alexandre-korman--profession alexandre-korman--text">Videograf / Editor / Fotograf</p>
      <div className="alexandre-korman--description-container">
        <p className="alexandre-korman--description-one alexandre-korman--text">
          Videographer and director based in Berlin. I create visually striking and rhythmically engaging films,
          blending abstract textures, cinematic storytelling, and music-driven aesthetics.
        </p>
        <p className="alexandre-korman--description-two alexandre-korman--text">
          From music videos and live performances to artistic documentaries and experimental visuals, my work captures
          the essence of sound, movement, and emotion. Whether working solo or collaborating with artists, dancers, and
          musicians, I bring unique narratives to life through film.
        </p>
        <div className="alexandre-korman--description-three">
          <p className="alexandre-korman--text">
            Looking for a creative and dynamic visual experience? Let’s collaborate and craft something unique together.
          </p>
          <a className="alexandre-korman--description-three--link alexandre-korman--text">
            → Explore my work & get in touch!
          </a>
        </div>
      </div>
      <div className="alexandre-korman--video--container">
        <div className="alexandre-korman--video--container-one-wrapper">
          <div className="alexandre-korman--video--container-one">
            <div className="alexandre-korman--video-rectangle app-global--frame">
              <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                <source src={videoAlexandre} type="video/mp4" />
              </video>
            </div>
            <div className="alexandre-korman--video-rectangle app-global--frame">
              <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                <source src={videoAlexandre} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="alexandre-korman--video--container-two-wrapper">
            <div className="alexandre-korman--video--container-two">
              <div className="alexandre-korman--video--container-sub-two">
                <div className="alexandre-korman--video-square app-global--frame">
                  <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                    <source src={videoAlexandre} type="video/mp4" />
                  </video>
                </div>
                <div className="alexandre-korman--video-square app-global--frame">
                  <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                    <source src={videoAlexandre} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="alexandre-korman--video--container-sub-two-bis">
                <div className="alexandre-korman--video-square app-global--frame">
                  <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                    <source src={videoAlexandre} type="video/mp4" />
                  </video>
                </div>
                <div className="alexandre-korman--video--small-rectangle app-global--frame">
                  <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                    <source src={videoAlexandre} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="alexandre-korman--video--music-art app-global--frame">
              <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                <source src={videoAlexandre} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="alexandre-korman--video--container-three-layout">
          <div className="alexandre-korman--video--container-three-wrapper">
            <div className="alexandre-korman--video--ktk-record app-global--frame">
              <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                <source src={videoAlexandre} type="video/mp4" />
              </video>
            </div>

            <div className="alexandre-korman--video--container-four">
              <div className="alexandre-korman--video-square app-global--frame">
                <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                  <source src={videoAlexandre} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square app-global--frame">
                <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                  <source src={videoAlexandre} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square app-global--frame">
                <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                  <source src={videoAlexandre} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="alexandre-korman--video--container-five-wrapper">
            <div className="alexandre-korman--video-rectangle app-global--frame">
              <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                <source src={videoAlexandre} type="video/mp4" />
              </video>
            </div>

            <div className="alexandre-korman--video--container-five">
              <div className="alexandre-korman--video-square app-global--frame">
                <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                  <source src={videoAlexandre} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square-big app-global--frame">
                <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
                  <source src={videoAlexandre} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

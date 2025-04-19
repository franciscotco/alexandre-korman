import { type ReactElement } from "react";

import atonism from "./videos/atonism.mp4";
import arma from "./videos/arma.mp4";
import beatAndPieces10 from "./videos/beat-and-pieces-10.mp4";
import bananaSlugs from "./videos/banana-slugs.mp4";
import driveYou from "./videos/drive-you.mp4";
import beatsAndPieces13 from "./videos/beats-and-pieces-13.mp4";
import zone3 from "./videos/zone-3.mp4";
import corpus16 from "./videos/corpus-16.mp4";
import corpusSparks from "./videos/corpus-sparks.mp4";
import corpusTribalEssence from "./videos/corpus-tribal-essence.mp4";
import vxlr from "./videos/vxlr.mp4";
import corpusBaumann from "./videos/corpus-baumann.mp4";
import arma2 from "./videos/arma-2.mp4";
import todoEma from "./videos/todo-ema.mp4";

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
              <video className="app-global--video" width={290} playsInline disablePictureInPicture autoPlay muted loop>
                <source src={atonism} type="video/mp4" />
              </video>
            </div>
            <div className="alexandre-korman--video-rectangle app-global--frame">
              <video className="app-global--video" width={290} playsInline disablePictureInPicture autoPlay muted loop>
                <source src={arma} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="alexandre-korman--video--container-two-wrapper">
            <div className="alexandre-korman--video--container-two">
              <div className="alexandre-korman--video--container-sub-two">
                <div className="alexandre-korman--video-square app-global--frame">
                  <video
                    className="app-global--video"
                    width={190}
                    playsInline
                    disablePictureInPicture
                    autoPlay
                    muted
                    loop
                  >
                    <source src={beatAndPieces10} type="video/mp4" />
                  </video>
                </div>
                <div className="alexandre-korman--video-square app-global--frame">
                  <video
                    className="app-global--video"
                    width={190}
                    playsInline
                    disablePictureInPicture
                    autoPlay
                    muted
                    loop
                  >
                    <source src={bananaSlugs} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="alexandre-korman--video--container-sub-two-bis">
                <div className="alexandre-korman--video-square app-global--frame">
                  <video
                    className="app-global--video"
                    width={190}
                    playsInline
                    disablePictureInPicture
                    autoPlay
                    muted
                    loop
                  >
                    <source src={driveYou} type="video/mp4" />
                  </video>
                </div>
                <div className="alexandre-korman--video--small-rectangle app-global--frame">
                  <video
                    className="app-global--video"
                    width={190}
                    playsInline
                    disablePictureInPicture
                    autoPlay
                    muted
                    loop
                  >
                    <source src={beatsAndPieces13} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="alexandre-korman--video--music-art app-global--frame">
              <video className="app-global--video" width={550} playsInline disablePictureInPicture autoPlay muted loop>
                <source src={todoEma} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="alexandre-korman--video--container-three-layout">
          <div className="alexandre-korman--video--container-three-wrapper">
            <div className="alexandre-korman--video--ktk-record app-global--frame">
              <video className="app-global--video" width={720} playsInline disablePictureInPicture autoPlay muted loop>
                <source src={zone3} type="video/mp4" />
              </video>
            </div>

            <div className="alexandre-korman--video--container-four">
              <div className="alexandre-korman--video-square app-global--frame">
                <video
                  className="app-global--video"
                  width={190}
                  playsInline
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                >
                  <source src={corpus16} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square app-global--frame">
                <video
                  className="app-global--video"
                  width={190}
                  playsInline
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                >
                  <source src={corpusSparks} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square app-global--frame">
                <video
                  className="app-global--video"
                  width={190}
                  playsInline
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                >
                  <source src={corpusTribalEssence} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="alexandre-korman--video--container-five-wrapper">
            <div className="alexandre-korman--video-rectangle app-global--frame">
              <video className="app-global--video" width={290} playsInline disablePictureInPicture autoPlay muted loop>
                <source src={vxlr} type="video/mp4" />
              </video>
            </div>

            <div className="alexandre-korman--video--container-five">
              <div className="alexandre-korman--video-square app-global--frame">
                <video
                  className="app-global--video"
                  width={190}
                  playsInline
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                >
                  <source src={corpusBaumann} type="video/mp4" />
                </video>
              </div>
              <div className="alexandre-korman--video-square-big app-global--frame">
                <video
                  className="app-global--video"
                  width={290}
                  playsInline
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                >
                  <source src={arma2} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

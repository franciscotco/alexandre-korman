import { AlexandreKorman } from "./alexandre-korman/alexandre-korman";
import { Contact } from "./contact/contact";
import { FashionShow } from "./fashion-show/fashion-show";
import { LiveEventCaptation } from "./live-event-captation/live-event-captation";
import { MusicVideoclip } from "./music-videoclip/music-videoclip";
import { EditorialPhotoshoot } from "./editorial-photoshoot/editorial-photoshoot";
import { Shortmovie } from "./shortmovie/shortmovie";

import "./app-global.css";
import "./app.css";

export function App() {
  return (
    <main className="app--main">
      <a href="#" className="app--close-menu">
        X
      </a>
      <ul className="app--menu-list">
        <li className="app--menu-item--alexandre-korman">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#alexandre-korman">
              Alexandre
              <br />
              Korman
            </a>
          </h1>
          <section className="app--menu-item--section" id="alexandre-korman">
            <AlexandreKorman />
          </section>
        </li>

        <li className="app--menu-item--music-videoclip">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#music-videoclip">
              Music
              <br />
              videoclip
            </a>
          </h1>
          <section className="app--menu-item--section" id="music-videoclip">
            <MusicVideoclip />
          </section>
        </li>

        <li className="app--menu-item--live-event-captation">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#live-event-captation">
              Live event
              <br />
              captation
            </a>
          </h1>
          <section className="app--menu-item--section" id="live-event-captation">
            <LiveEventCaptation />
          </section>
        </li>

        <li className="app--menu-item--fashion-show">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#fashion-show">
              fashion
              <br />
              show
            </a>
          </h1>
          <section className="app--menu-item--section" id="fashion-show">
            <FashionShow />
          </section>
        </li>

        <li className="app--menu-item--editorial-photoshoot">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#editorial-photoshoot">
              editorial
              <br />
              photoshoot
            </a>
          </h1>
          <section className="app--menu-item--section" id="editorial-photoshoot">
            <EditorialPhotoshoot />
          </section>
        </li>

        <li className="app--menu-item--shortmovie">
          <h1 className="app--menu-item--title">
            <a className="app--menu-item--anchor" href="#shortmovie">
              shortmovie
            </a>
          </h1>
          <section className="app--menu-item--section" id="shortmovie">
            <Shortmovie />
          </section>
        </li>
      </ul>
      <Contact />
    </main>
  );
}

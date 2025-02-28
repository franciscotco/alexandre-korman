import videoAlexandre from "./videos/alexandre-korman.mp4";

import "./editorial-photoshoot.css";

export function EditorialPhotoshoot() {
  return (
    <div className="editorial-photoshoot--image-container">
      <div className="editorial-photoshoot--image-block">
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/b1053cc81cdeeb47a17b06ded56bcca9.jpg"
            draggable="false"
          />
        </div>
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/0ad411e32c3e1661b295cec0c4622ea2.jpg"
            draggable="false"
          />
        </div>
      </div>
      <div className="editorial-photoshoot--image-block">
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/cebe5213f1ba1c35b6e7bec496794314.jpg"
            draggable="false"
          />
        </div>
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/243dbbf03bd99aa49a2cbd86c9f22f1f.jpg"
            draggable="false"
          />
        </div>
      </div>
      <div className="editorial-photoshoot--image-block">
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/34738242f6b9daabff682edde8364963.jpg"
            draggable="false"
          />
        </div>
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/86743231ac84a4ecd0fce26abc4482fc.jpg"
            draggable="false"
          />
        </div>
      </div>
      <div className="editorial-photoshoot--image-block">
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/ff027cd8fb3e175561a5918d52638f5c.jpg"
            draggable="false"
          />
        </div>
        <div className="app-global--frame editorial-photoshoot--image-rectangle">
          <img
            className="app-global--image"
            src="https://alexandrekorman.my.canva.site/_assets/media/e52dbedb10a7a5d89e2769dfa6317861.jpg"
            draggable="false"
          />
        </div>
      </div>
      <div className="app-global--video-rectangle app-global--frame">
        <video className="app-global--video" playsInline disablePictureInPicture autoPlay muted loop>
          <source src={videoAlexandre} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

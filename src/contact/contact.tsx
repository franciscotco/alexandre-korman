import "./contact.css";

export function Contact() {
  return (
    <div className="contact--container">
      <div className="contact--identity">
        <div className="contact--identity-layout">
          <div className="contact--name">
            <p className="app-global--text contact--full-name">ALEXANDRE KORMAN</p>
            <h1 className="contact--title-contact">CONTACT</h1>
          </div>
          <div className="contact--email--layout">
            <div className="contact--email--container">
              <p>E-mail: </p>
              <a href="mailto:korman.alexandre@gmail.com">korman.alexandre@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="app-global--frame editorial-photoshoot--image-rectangle">
        <img
          className="app-global--image"
          src="https://alexandrekorman.my.canva.site/_assets/media/8cf55a4a97fd023bb053d43a0af3eb8b.jpg"
          draggable="false"
        />
      </div>
    </div>
  );
}

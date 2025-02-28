import { createRoot } from "react-dom/client";

import { App } from "./app";

const createDomNode = (): HTMLElement => {
  const domNodeRoot = document.getElementById("root");

  if (domNodeRoot) {
    return domNodeRoot;
  } else {
    const domNode = document.createElement("div");

    domNode.setAttribute("id", "root");
    document.body.appendChild(domNode);
    return domNode;
  }
};

const root = createRoot(createDomNode());

root.render(<App />);

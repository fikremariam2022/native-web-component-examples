customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let paragraph = document.createElement("p");
      let templateContent = this.textContent;
      paragraph.textContent = templateContent;
      paragraph.className = "my-paragraph";

      const shadowRoot = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `.my-paragraph {
      color: white;
      background-color: #666;
      padding: 5px;
    }`;
      shadowRoot.appendChild(style);
      const node = shadowRoot.appendChild(paragraph.cloneNode(true));
      console.log(node);
    }
  }
);

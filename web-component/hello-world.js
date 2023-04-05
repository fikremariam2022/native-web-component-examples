// web component
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.name = "World";
  }

  // component attributes
  static get observedAttributes() {
    return ["name"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue.toUpperCase();
  }

  // connect component
  connectedCallback() {
    this.textContent = `Hello ${this.name}!`;
  }
}

// register component
customElements.define("hello-world", HelloWorld);

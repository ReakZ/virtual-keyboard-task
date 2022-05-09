class CustomHtmlElement {
  constructor(tag, classList, id = false, inner = false) {
    this.tag = tag;
    this.classList = classList || '';
    this.id = id || '';
    this.inner = inner;
    this.el = document.createElement(this.tag);
    if (Array.isArray(this.classList)) {
      this.classList.forEach((x) => this.el.classList.add(x));
    } else {
      this.el.classList.add(this.classList);
    }
    if (this.inner) {
      this.el.innerHTML = this.inner;
    }
    if (this.id) {
      this.el.dataset.id = this.id;
    }
  }

  place() {
    return this.el;
  }
}

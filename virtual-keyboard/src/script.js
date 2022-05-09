/* eslint-disable max-classes-per-file */
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
class BasicKey extends CustomHtmlElement {
  constructor(classList, id = false, inner = false) {
    super('button', classList, id, inner);
  }
}

class Keyboard {
  constructor() {
    this.global = {
      lang: 'en',
      shift: false,
      capslock: false,
    };
  }

  place() {
    this.containerKeyboard = new CustomHtmlElement(
      'div',
      'keyboard--container',
    ).place();
    document.body.append(this.containerKeyboard);
    this.textarea = new CustomHtmlElement(
      'textarea',
      'keyboard--textarea',
    ).place();
    this.containerKeyboard.append(this.textarea);
    this.keysField = new CustomHtmlElement(
      'div',
      'keyboard--keysfield',
    ).place();
    this.containerKeyboard.append(this.keysField);
    this.keysField.addEventListener('click', (e) => this.ClickListener(e));
    document.body.addEventListener('keydown', (e) => this.pressListener(e));
    document.body.addEventListener('keydown', (e) => this.changeLang(e));
    document.body.addEventListener('keyup', (e) => this.clearAnimation(e));
    this.keysField.addEventListener('animationend', animationEnd);
    this.description = new CustomHtmlElement(
      'div',
      'keyboard--description',
      false,
      'Клавиатура создана на основе Windows клавиатуры. Ctrl + Alt комбинация для смены языка ( англ - рус )',
    ).place();
    this.containerKeyboard.append(this.description);
  }

  drawKeys() {
    this.keysField.innerHTML = '';
    line1.forEach((x) => {
      const precontent = x.content[this.global.lang][this.global.shift ? 1 : 0];
      const content = this.global.capslock
        ? precontent[0].toUpperCase() + precontent.slice(1)
        : precontent;

      const key = new BasicKey(x.classes, x.id, content);

      this.keysField.append(key.place());
    });
  }

  eventHandlerz(e, element) {
    const key = line1.find((x) => x.id === element.dataset.id);

    if (key.type === 'char') {
      const precontent = key.content[this.global.lang][this.global.shift ? 1 : 0];
      const content = this.global.capslock
        ? precontent[0].toUpperCase() + precontent.slice(1)
        : precontent;
      this.updateTextArea(content);
    } else if (key.func) {
      key.func.call(this, key, e);
    }
  }

  ClickListener(e) {
    if (e.target.tagName === 'BUTTON') {
      this.eventHandlerz(e, e.target);
      animationOnClick(e.target);
    }
  }

  pressListener(e) {
    const element = document.querySelector(`[data-id="${e.code}"]`);
    if (element) {
      animationOnClick(element);
      this.eventHandlerz(e, element);
    }
  }

  updateTextArea(content) {
    if (!document.querySelector('.keyboard--textarea:focus')) {
      this.textarea.value += content;
    }
  }

  changeLang(e) {
    if (e.ctrlKey && e.altKey) {
      this.global.lang = this.global.lang === 'en' ? 'ru' : 'en';
      this.drawKeys();
    }
  }

  clearAnimation(e) {
    const id = e.code;
    this.global.shift = false;
    document.querySelector(`[data-id="${id}"]`).classList.remove('key-acitve');
    this.drawKeys();
  }
}

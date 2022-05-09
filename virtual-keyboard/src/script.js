/* eslint-disable max-classes-per-file */
const line1 = [
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['`', '~'],
      ru: ['ё', 'Ё'],
    },
    id: 'Backquote',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['1', '!'],
      ru: ['1', '!'],
    },
    id: 'Digit1',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['2', '@'],
      ru: ['2', '"'],
    },
    id: 'Digit2',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['3', '#'],
      ru: ['3', '№'],
    },
    id: 'Digit3',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['4', '$'],
      ru: ['4', ';'],
    },
    id: 'Digit4',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['5', '%'],
      ru: ['5', '%'],
    },
    id: 'Digit5',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['6', '^'],
      ru: ['6', ':'],
    },
    id: 'Digit6',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['7', '&'],
      ru: ['7', '?'],
    },
    id: 'Digit7',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['8', '*'],
      ru: ['8', '*'],
    },
    id: 'Digit8',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['9', '('],
      ru: ['9', '('],
    },
    id: 'Digit9',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['0', ')'],
      ru: ['0', ')'],
    },
    id: 'Digit0',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['-', '_'],
      ru: ['-', '_'],
    },
    id: 'Minus',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['=', '+'],
      ru: ['=', '+'],
    },
    id: 'Equal',
  },
  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['Backspace', 'Backspace'],
      ru: ['Backspace', 'Backspace'],
    },
    id: 'Backspace',
    func: backspace,
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Tab', 'Tab'],
      ru: ['Tab', 'Tab'],
    },
    id: 'Tab',
    func: insertTab,
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['q', 'Q'],
      ru: ['й', 'Й'],
    },
    id: 'KeyQ',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['w', 'W'],
      ru: ['ц', 'Ц'],
    },
    id: 'KeyW',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['e', 'E'],
      ru: ['у', 'У'],
    },
    id: 'KeyE',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['r', 'R'],
      ru: ['к', 'К'],
    },
    id: 'KeyR',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['t', 'T'],
      ru: ['е', 'Е'],
    },
    id: 'KeyT',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['y', 'Y'],
      ru: ['н', 'Н'],
    },
    id: 'KeyY',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['u', 'U'],
      ru: ['г', 'Г'],
    },
    id: 'KeyU',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['i', 'I'],
      ru: ['ш', 'Ш'],
    },
    id: 'KeyI',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['o', 'O'],
      ru: ['щ', 'Щ'],
    },
    id: 'KeyO',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['p', 'P'],
      ru: ['з', 'З'],
    },
    id: 'KeyP',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['[', '{'],
      ru: ['х', 'Х'],
    },
    id: 'BracketLeft',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: [']', '}'],
      ru: ['ъ', 'Ъ'],
    },
    id: 'BracketRight',
  },
  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['Delete', 'Delete'],
      ru: ['Delete', 'Delete'],
    },
    id: 'Delete',
    func: deleteFunc,
  },
  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['CapsLock', 'CapsLock'],
      ru: ['CapsLock', 'CapsLock'],
    },
    id: 'CapsLock',
    func: capsLockToggle,
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['a', 'A'],
      ru: ['ф', 'Ф'],
    },
    id: 'KeyA',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['s', 'S'],
      ru: ['ы', 'Ы'],
    },
    id: 'KeyS',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['d', 'D'],
      ru: ['в', 'В'],
    },
    id: 'KeyD',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['f', 'F'],
      ru: ['а', 'А'],
    },
    id: 'KeyF',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['g', 'G'],
      ru: ['п', 'П'],
    },
    id: 'KeyG',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['h', 'H'],
      ru: ['р', 'Р'],
    },
    id: 'KeyH',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['j', 'J'],
      ru: ['о', 'О'],
    },
    id: 'KeyJ',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['k', 'K'],
      ru: ['л', 'Л'],
    },
    id: 'KeyK',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['l', 'L'],
      ru: ['д', 'Д'],
    },
    id: 'KeyL',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: [';', ':'],
      ru: ['ж', 'Ж'],
    },
    id: 'Semicolon',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ["'", '"'],
      ru: ['э', 'Э'],
    },
    id: 'Quote',
  },

  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['Enter', 'Enter'],
      ru: ['Enter', 'Enter'],
    },
    id: 'Enter',
    func: EnterPress,
  },
  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['Shift', 'Shift'],
      ru: ['Shift', 'Shift'],
    },
    id: 'ShiftLeft',
    func: shiftHandler,
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['z', 'Z'],
      ru: ['я', 'Я'],
    },
    id: 'KeyZ',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['x', 'X'],
      ru: ['ч', 'Ч'],
    },
    id: 'KeyX',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['c', 'C'],
      ru: ['с', 'С'],
    },
    id: 'KeyC',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['v', 'V'],
      ru: ['м', 'М'],
    },
    id: 'KeyV',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['b', 'B'],
      ru: ['и', 'И'],
    },
    id: 'KeyB',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['n', 'N'],
      ru: ['т', 'Т'],
    },
    id: 'KeyN',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['m', 'M'],
      ru: ['ь', 'Ь'],
    },
    id: 'KeyM',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: [',', '<'],
      ru: ['б', 'Б'],
    },
    id: 'Comma',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['.', '>'],
      ru: ['ю', 'Ю'],
    },
    id: 'Period',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['/', '?'],
      ru: ['.', ','],
    },
    id: 'Slash',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['\\', '|'],
      ru: ['\\', '/'],
    },
    id: 'Backslash',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['△', '△'],
      ru: ['△', '△'],
    },
    id: 'ArrowUp',
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Shift', 'Shift'],
      ru: ['Shift', 'Shift'],
    },
    id: 'ShiftRight',
    func: shiftHandler,
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Ctrl', 'Ctrl'],
      ru: ['Ctrl', 'Ctrl'],
    },
    id: 'ControlLeft',
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Win', 'Win'],
      ru: ['Win', 'Win'],
    },
    id: 'MetaLeft',
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Alt', 'Alt'],
      ru: ['Alt', 'Alt'],
    },
    id: 'AltLeft',
  },
  {
    type: 'char',
    classes: ['key', 'specKey-size10'],
    content: {
      en: [' ', ' '],
      ru: [' ', ' '],
    },
    id: 'Space',
  },
  {
    type: 'spec',
    classes: 'key',
    content: {
      en: ['Alt', 'Alt'],
      ru: ['Alt', 'Alt'],
    },
    id: 'AltRight',
  },
  {
    type: 'spec',
    classes: ['key', 'specKey-size2'],
    content: {
      en: ['Ctrl', 'Ctrl'],
      ru: ['Ctrl', 'Ctrl'],
    },
    id: 'ControlRight',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['◁', '◁'],
      ru: ['◁', '◁'],
    },
    id: 'ArrowLeft',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['▽', '▽'],
      ru: ['▽', '▽'],
    },
    id: 'ArrowDown',
  },
  {
    type: 'char',
    classes: 'key',
    content: {
      en: ['▷', '▷'],
      ru: ['▷', '▷'],
    },
    id: 'ArrowRight',
  },
];

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

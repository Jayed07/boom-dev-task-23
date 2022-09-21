import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  setEmojis(emojis) {
    this.emojis = emojis;

    let div = document.getElementById("emojis");
    div.innerHTML = '';

    let paragraph = document.createElement("p");
    // paragraph.innerHTML = this.emojis;

    div.appendChild(paragraph);
  }

  addBananas() {
    let elementToAdd = this.banana;
    let newArr = this.emojis.map(function(monkey) {
      return monkey.concat('', elementToAdd);
    });

    this.emojis = newArr;

    let paragraph = document.querySelector('p');
    paragraph.innerHTML = this.emojis;
  }
}

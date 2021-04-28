interface CSSStyle {
  [key: string]: string
}

interface CSSStylesObject {
  [key: string]: CSSStyle
}

function init(): HTMLElement {
  const p = document.createElement("p");

  document.body.appendChild(p);
  
  return p;
}

function parseCSSStyles(stylesObj: CSSStylesObject): string {
  let stylesheet = "";

  for (let [selector, styles] of Object.entries(stylesObj)) {
    let rule = `${ selector }{`;

    for (let [styleProp, stylePropVal] of Object.entries(styles)) {
      let style = `${ styleProp }: ${ stylePropVal };`;
      rule += style;
    }

    rule += "}";

    stylesheet += rule;
  }
  return stylesheet;
}

function printMsg(el: HTMLElement, msg: string) {
  const msgArr: Array<string> = msg.split("");

  const interval = setInterval(() => {
    if (msgArr.length > 0) {
      el.innerText = el.innerText + msgArr.shift();
    } else {
      clearInterval(interval);
      el.innerText.blink();
    }
  }, 200);
}

export default {
  init,
  parseCSSStyles,
  printMsg
}

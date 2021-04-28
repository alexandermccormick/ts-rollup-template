import MyMod from "./lib";

const styles = {
  "*": {
    "box-sizing": "border-box",
    margin: "0px",
    padding: "0px"
  },
  body: {
    background: "#333333",
    display: "flex",
    height: "100vh",
    "justify-content": "center",
    "align-items": "center",
    width: "100vw"
  },
  p: {
    color: "#990000",
    "font-size": "5em",
    "font-weight": "600",
    "text-shadow": "2px 2px 10px rgba(0,0,0,.2)"
  }
}

const styleEl = document.createElement("style");
styleEl.appendChild(document.createTextNode(MyMod.parseCSSStyles(styles)));
document.head.appendChild(styleEl);

const msgBoard = MyMod.init()

MyMod.printMsg(msgBoard, "Hello, World!");

import MyModule from "./dist/bundle.js"

const msgBoard = MyModule.init();

MyModule.printMsg(msgBoard, "Hello World!");

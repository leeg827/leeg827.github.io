import Intro from "./animations/intro.js";

class App {
    constructer(){
        this._createIntro();
    }


    _createIntro(){
        this.intro = new Intro();
    }
} 



new App(); 
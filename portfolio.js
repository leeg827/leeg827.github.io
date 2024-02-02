import {gsap} from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin);

document.addEventListener("DOMContentLoaded", function() {
  // Your GSAP code here
});

// Additional custom JavaScript code
console.log("Hello from myCustomCode.js!");
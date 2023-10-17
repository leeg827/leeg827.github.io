import { gsap } from "/node_modules/gsap/gsap-core.js"; 
import Flip from '/node_modules/gsap/Flip.js';

gsap.registerPlugin(Flip);

export default class Intro {
    constructer(){
        this.state = null;
        this.centerImage = document.querySelector('.intro__center-image img');
        this.centerImageWrapper = document.querySelector('.intro__center-image');
        this.imagesWrapper = document.querySelector('.intro__images');
        this.images = [...this.imagesWrapper.querySelectorAll('img')];

        this._getFinalState();
        this._setInitialState();
        // this._moveImagesToCenter();
        this.fadeUpImages();
    }

    _getFinalState(){
        gsap.set([this.images,this.centerImageWrapper],{
            xPercent:-50,
            yPercent:-50,
        });

        this.state = Flip.getState([this.centerImageWrapper,this.images]);
    }

    _setInitialState(){
        this.centerImageWrapper.classList.add('initial');
        this.ImageWrapper.classList.add('initial'); 

        gsap.set(this.images,{
            xPercent:0,
            yPercent:0,
            y:80,
        });

        gsap.set(this.centerImageWrapper,{
        y:80,
           scale:0.15,
        })

        gsap.set(this.centerImage,{
            scale:2,
        });
    }

    _fadeUpImage(){
        return gsap.to([this.images,this.centerImageWrapper],{
            y:0,
            opacity:1,
            duration:3,
            ease:'power3.inOut',
            stagger:0.1,
        });
    }

    _moveImagesToCenter(){
        Flip.to(this.state, {
        duration:2,
        ease:'expo.InOut',
        stagger:0.15,
        });
    }
}
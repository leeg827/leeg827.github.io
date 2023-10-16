import { gsap } from './animations/node_module/gsap-core.js';
import { Flip } from './animations/node_module/gsap/Flip.js';

gsap.registerPlugin(Flip);

export default class Intro {
    constructer(){
        this.state = null;
        this.centerImage = document.querySelector('.intro_center-image img');
        this.centerImageWrapper = document.querySelector('.intro_center-image');
        this.imageWrappers = document.querySelector('.intro_images');
        this.images = [...this.imageWrappers.querySelectorAll('img')];

        this._getFinalState();
        this._setInitialState();
        this._moveImagesToCenter();
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
        })
    }

    _moveImagesToCenter(){
        Flip.to(this.state, {
        duration:2,
        ease:'expo.InOut',
        stagger:0.15,
        })
    }
}
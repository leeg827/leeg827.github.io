let container = document.querySelector('#container')
let button = document.querySelector('button')
button.addEventListener('click',function(){
   let circle = document.createElement('div');
   circle.classList.add('circle');
   circle.style.left=(30*Math.random()) + '%';
   circle.style.top=(100*Math.random()) + '%';
   circle.innerHTML='<div></div>';
   container.appendChild(circle);
});
console.log('hello world')

container.addEventListener ('click',function(event){
    if(event.target.classList.contains('circle')){
        event.target.remove();
    }});

let circles = document.querySelectorAll('.circle')
circles.forEach(function(circle){
    console.log(circles.length);
});

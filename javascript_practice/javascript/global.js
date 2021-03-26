let container = document.querySelector('#container')
let button = document.querySelector('button')
let count = document.querySelector('#counter')
let redButton = document.querySelector('#red')
let blueButton = document.querySelector('#blue')
let yellowButton = document.querySelector('#yellow')
let clear = document.querySelector('#clear')

button.addEventListener('click',function(){
   let circle = document.createElement('div');
   circle.classList.add('circle');
   circle.style.left=(30*Math.random()) + '%';
   circle.style.top=(100*Math.random()) + '%';
   circle.innerHTML='<div></div>';
   container.appendChild(circle);

   let images = container.querySelectorAll('.circle');
   let amount = images.length;
   count.innerHTML = amount;
});

console.log('hello world')

container.addEventListener ('click',function(event){
    if(event.target.classList == 'circle'){
        event.target.remove();
        let circles= container.querySelectorAll('.circle');
        let amount = circles.length;
        count.innerHTML = amount;
}});

redButton.addEventListener ('click',function(){
    let red = document.querySelector('#red').style.backgroundColor;
    let circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle){
        circle.style.backgroundColor = 'red';
    })
});

blueButton.addEventListener ('click',function(){
    let blue = document.querySelector('#red').style.backgroundColor;
    let circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle){
        circle.style.backgroundColor = 'blue';
    })
});

yellowButton.addEventListener ('click',function(){
    let yellow = document.querySelector('#yellow').style.backgroundColor;
    let circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle){
        circle.style.backgroundColor = 'yellow';
    })
});

clear.addEventListener('click',function(){
    container.innerHTML='';
    count.innerHTML='0';
    alert("All clear!");
})


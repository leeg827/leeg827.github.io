let button = document.querySelector('button')
let count = document.querySelector('#counter')
let redButton = document.querySelector('#red')
let blueButton = document.querySelector('#blue')
let yellowButton = document.querySelector('#yellow')
let clear = document.querySelector('#clear')

button.addEventListener('click',function(){
   let flower = document.createElement('div');
   flower.classList.add('flower');
   flower.style.left=(100*Math.random()) + '%';
   flower.style.top=(100*Math.random()) + '%';
   document.body.appendChild(flower);

   let images = document.querySelectorAll('.flower');
   let amount = images.length;
   count.innerHTML = amount;
});

document.body.addEventListener ('click',function(event){
    if(event.target.classList == 'flower'){
        event.target.remove();
        let flowers= document.querySelectorAll('.flower');
        let amount = flowers.length;
        count.innerHTML = amount;
}});

redButton.addEventListener ('click',function(){
    let flowers = document.querySelectorAll('.flower');
    flowers.forEach(function(flower){
        flower.style.background="url('/images/daisy.png')"
        flower.style.backgroundSize="5rem 5rem";
    })
});

blueButton.addEventListener ('click',function(){
    let flowers = document.querySelectorAll('.flower');
    flowers.forEach(function(flower){
        flower.style.background="url('/images/cornflower.png')"
        flower.style.backgroundSize="5rem 5rem";
    })
});

yellowButton.addEventListener ('click',function(){
    let flowers = document.querySelectorAll('.flower');
    flowers.forEach(function(flower){
        flower.style.background="url('/images/poppy.png')"
        flower.style.backgroundSize="5rem 5rem";
    })
});

clear.addEventListener('click',function(){
    let flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower)=>{
        flower.remove();
    })
    count.innerHTML='0';
    alert("All the flowers are gone!");
})


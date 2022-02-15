let watch = document.querySelector('.watch');

watch.addEventListener('click',function(){
    console.log('watch was detected');
});

function opacity(){
    let train = document.querySelector('.trainstation');
    train.classList.add('.trainstation2');
};

let car = document.querySelector('.car');
car.addEventListener('click',opacity());
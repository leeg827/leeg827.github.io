let button = document.querySelector(".button")
let lanterns = document.querySelectorAll(".lantern")

button.addEventListener('click',function(){
    // let container = document.querySelector('.lantern-container')
    let lantern = document.createElement('div');
    lantern.classList.add('lantern');
    lantern.style.left=((Math.random() * document.body.clientWidth-lantern.clientWidth));
    lantern.style.top=((Math.random() * document.body.clientHeight-lantern.clientHeight));
    document.body.appendChild(lantern);
    setTimeout(function(){
        lantern.addEventListener('animationend', () => {
            lantern.remove();
          });}, 3000);
 });


// for (var i = 0; i < 5; i++) {
//     $('.main').append('<div class="box"></div>');
//   }
//   $( '.box' ).each(function( index ) {
//     $(this).css({
//       left : Math.random() * ($('.main').width() - $(this).width()),
//       top : Math.random() * ($('.main').height() - $(this).height())
//     });
//  });
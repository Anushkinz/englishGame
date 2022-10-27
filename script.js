var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
var listener = function(e) {
  div.style.left = e.pageX - 50 + "px";
  div.style.top = e.pageY - 50 + "px";
};

circle.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
});

circle.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
    let divx = div.getBoundingClientRect().x
    let divy = div.getBoundingClientRect().y
    let tablex = $table.getBoundingClientRect().x
    let tabley = $table.getBoundingClientRect().y
    // if (){
    //     alert("you won")
    // }
});

$start.addEventListener('click', function(){
    $startFrame.classList.add('hide')
    $game.classList.remove('hide')
})
var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
let $table1 = document.querySelector('#table1')
let $table2 = document.querySelector('#table2')
let $circle = document.querySelector("#circle")
let level = 0
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
    if (Math.abs(divx-tablex)<=80   && Math.abs(divy-tabley) <= 50){
        alert("you won")
        level++
        levels(level)
    }
});

$start.addEventListener('click', function(){
    $startFrame.classList.add('hide')
    $game.classList.remove('hide')
})

function levels(level){
    $circle.style.top = 0
    $circle.style.left = 0
    if (level <= 3){
        $table.style.backgroundImage = `url(./table${level}.png)`
        $circle.style.backgroundImage = `url(./ball${level}.png)`
    }else{
        level-=3
        $table1.classList.remove('hide')
        $table2.classList.remove('hide')
        $table1.style.backgroundImage = `url(./table2.png)`
        $table1.style.right = "50%"
        $table2.style.right = "80%"
        $table2.style.backgroundImage = `url(./table3.png)`
        $table.style.backgroundImage = `url(./table1.png)`
        $circle.style.backgroundImage = `url(./ball${level}.png)`
    }
}
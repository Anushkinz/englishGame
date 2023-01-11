// озвучка iron мужчина
var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $part1 = document.querySelector('.part1')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
// let $table1 = document.querySelector('#table1')
// let $table2 = document.querySelector('#table2')
let $circle = document.querySelector("#circle")
let $tasks = document.querySelector('.tasks');
let $task = document.querySelectorAll('.task')
let $description = document.querySelector('.description')
let $mainPage = document.querySelector('#mainPage')
let audio = new Audio("audio/welcome.mp3");
let level = 1
$task.forEach((t,e)=> {
    // e.preventDefault();
    console.log(t);
    t.addEventListener('click',()=> showTask(t.dataset.id))
})
function showTask(id){
    level = id;
    levels(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
}

var listener = function(e) {
  div.style.left = e.pageX - 50 + "px";
  div.style.top = e.pageY - 130 + "px";
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
       audio = new Audio(`audio/great.mp3`);
        level++
        levels(level)
    }
});

$start.addEventListener('click', function(){
    audio.play();
    // $tasks.style.visibility = "visible;
    $tasks.classList.remove('hide')
    $startFrame.classList.add('hide')
})


function levels(level){
    level = Number(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
    $circle.style.top = 0
    $circle.style.left = 0
    let color = ""
    switch (level) {
        case 0:
            color = ""
            break
        case 1:
            color = "red"
            break
        case 2:
            color = "green"
            break
        case 3:
            color = "blue"
            break
        case 4:
            color = "red"
            break
        case 5:
            color = "red"
            break
    }
    if (level <= 3){
        console.log(level)
        console.log(color)
        audio = new Audio(`audio/${color}ball-${color}table.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <div>
                <img src="./ball${level}.png">
                --- ${color} ball
            </div>
             <div>
                <img src="./table${level}.png">
                --- ${color} table
            </div>
            <p>put ${color} ball on the ${color} table</p>
        `)
        $table.style.color = "black"
        $circle.style.backgroundImage = `url(./ball${level}.png)`
        $table.style.backgroundImage = `url(./table${level}.png)`
    }else{
        level-=3
        $table1.classList.remove('hide')
        $table2.classList.remove('hide')
        $table1.style.backgroundImage = url(`./table2.png`)
        $table1.style.right = "50%"
        $table2.style.right = "80%"
        $table2.style.backgroundImage = url(`./table3.png`)
        $table.style.backgroundImage = url(`./table1.png`)
        $circle.style.backgroundImage = url(`./ball${level}.png`)
    }
}


$mainPage.addEventListener('click', function(){
    $game.classList.add('hide')
    $tasks.classList.remove('hide')
})
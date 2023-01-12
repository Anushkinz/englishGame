// озвучка iron мужчина
var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $part1 = document.querySelector('.part1')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
let $won = document.querySelector('.won')
let $resetBtn = document.querySelector('.reset')
let $nextBtn = document.querySelector('.next')
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
  div.style.top = e.pageY - 170 + "px";
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
       audio = new Audio(`audio/great.mp3`);
       audio.play()
        won()
    }
});

function won(){
    $won.classList.remove('hide')
    $game.style.pointerEvents = 'none'
}

$resetBtn.addEventListener('click', function(){
    $won.classList.add('hide')
    levels(level)
    $game.style.pointerEvents = 'auto'
})

$nextBtn.addEventListener('click', function(){
    $won.classList.add('hide')
    level++
    levels(level)
    $game.style.pointerEvents = 'auto'
})

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
    let icon = ""
    switch (level) {
        case 1:
            icon = "ball"
            break
        case 2:
            icon = "pen"
            break
        case 3:
            icon = "book"
            break
        case 4:
            // icon = "pen"
            color = "red"
            break
        case 5:
            color = "green"
            break
        case 6:
            color = "blue"
            break
    }
     if (level <= 3){
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <div>
                <img src="./icon/${icon}.png">
                ---- ${icon}
            </div>
             <div>
                <img src="./icon/table.png">
                ---- table
            </div>
            <p>put ${icon} on the table</p>
        `)
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $table.style.backgroundImage = `url(./icon/table.png)`
    }else if (level>3 && level <= 6){
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
let character = document.querySelector('#character');
let movebutton = document.querySelector("#movebutton");
let move30button = document.querySelector("#move30button");
let movefrom30button = document.querySelector("#movefrom30button");
let jumponcebutton = document.querySelector("#jumponcebutton");
let jumpingbutton = document.querySelector("#jumpingbutton");
let fadebutton = document.querySelector("#fadebutton");
let glowbutton = document.querySelector("#glowbutton");
let falldownbutton = document.querySelector("#falldownbutton");

console.log("ready to rumble");

movebutton.addEventListener('click', move);


function move(){
    console.log("Move!!!");
    character.classList.add('move');
}

move30button.addEventListener('click', move30);

function move30(){
    console.log("Move 30%!!!");
    character.classList.add('move30');
}

movefrom30button.addEventListener('click', movefrom30);

function movefrom30(){
    console.log("Move from 30%!!!");
    character.classList.add('movefrom30');
}

jumponcebutton.addEventListener('click', jumponce);

function jumponce(){
    console.log("One Jump!!!");
    character.classList.add('jumponce');
}

jumpingbutton.addEventListener('click', jumping);

function jumping(){
    console.log("Jumping!!!");
    character.classList.add('jumping');
}

fadebutton.addEventListener('click', fade);

function fade(){
    console.log("Fade!!!");
    character.classList.add('fade');
}

glowbutton.addEventListener('click', glow);

function glow(){
    console.log("Glow!!!");
    character.classList.add('glow');
}
falldownbutton.addEventListener('click', falldown);

function falldown(){
    console.log("Fall down!!!");
    character.classList.add('falldown');
}


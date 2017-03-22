let character = document.querySelector('#character');

character.addEventListener('click', characterJump);

function characterJump(){
    console.log("jump");
    character.classList.add('jump');
}

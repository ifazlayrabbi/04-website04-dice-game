
'use strict'

let click 
let player1 = Math.ceil(Math.random()*5)
console.log(player1)

let player2 = Math.ceil(Math.random()*5)
console.log(player2)

let j=0;
for(let i=0; i<player1; i++)
    document.getElementsByClassName('a'+i)[j].style.visibility='hidden'
for(let i=0; i<player2; i++)
    document.getElementsByClassName('b'+i)[j].style.visibility='hidden'


console.log(player1 = 6 - player1)
console.log(player2 = 6 - player2)

if(player1 == player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Draw! <i class="fa-solid fa-flag-checkered"></i>'
else if(player1 > player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Player 1 wins!'
else
    document.getElementsByTagName('h1')[0].innerHTML='Player 2 wins! <i class="fa-solid fa-flag-checkered"></i>'

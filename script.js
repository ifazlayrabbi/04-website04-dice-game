
'use strict'


let player1 = Math.ceil(Math.random()*5)
console.log('player1: '+ player1)

let player2 = Math.ceil(Math.random()*5)
console.log('player2: '+ player2)

let hide1, hide2
console.log('hide1: '+ (hide1 = 6 - player1))
console.log('hide2: '+ (hide2 = 6 - player2))


/*
// without organizing the dots
let j=0;
for(let i=0; i<hide1; i++)
    document.getElementsByClassName('a'+i)[j].style.visibility='hidden'
for(let i=0; i<hide2; i++)
    document.getElementsByClassName('b'+i)[j].style.visibility='hidden'
*/


//with organizing the dots
//player 1 dice
var i=player1, m
switch (i){
    case 1: 
        for(m=1; m<6; m++)
            document.getElementsByClassName('a'+m)[0].style.visibility='hidden'
        document.querySelector('.a0').classList.add('a0new')
        break
    case 2: 
        for(m=0; m<6; m++){
            if(m==2)
                continue
            if(m==3)
                continue
            document.getElementsByClassName('a'+m)[0].style.visibility='hidden'
        }
        break
    case 3:         
        for(m=0; m<6; m++){
            if(m==0){
                document.querySelector('.a0').classList.add('a0new')
                continue
            }
            if(m==2){
                document.querySelector('.a2').classList.add('a2new')
                continue
            }
            if(m==3)
                continue
            document.getElementsByClassName('a'+m)[0].style.visibility='hidden'
        }
        break
    case 4:
        for(m=0; m<6; m++){
            if(m==1)
                document.getElementsByClassName('a'+m)[0].style.visibility='hidden'
            if(m==4)
                document.getElementsByClassName('a'+m)[0].style.visibility='hidden'
        }
        break
    case 5:
        for(m=0; m<6; m++){
            if(m==0)
                document.querySelector('.a0').classList.add('a0new')
            if(m==2)
                document.querySelector('.a2').classList.add('a2new')
            if(m==4)
                document.querySelector('.a4').style.visibility='hidden'
        }
        break
}





//player 2 dice
var i=player2, m
switch (i){
    case 1: 
        for(m=1; m<6; m++)
            document.getElementsByClassName('b'+m)[0].style.visibility='hidden'
        document.querySelector('.b0').classList.add('a0new')
        break
    case 2: 
        for(m=0; m<6; m++){
            if(m==2)
                continue
            if(m==3)
                continue
            document.getElementsByClassName('b'+m)[0].style.visibility='hidden'
        }
        break
    case 3:         
        for(m=0; m<6; m++){
            if(m==0){
                document.querySelector('.b0').classList.add('a0new')
                continue
            }
            if(m==2){
                document.querySelector('.b2').classList.add('a2new')
                continue
            }
            if(m==3)
                continue
            document.getElementsByClassName('b'+m)[0].style.visibility='hidden'
        }
        break
    case 4:
        for(m=0; m<6; m++){
            if(m==1)
                document.getElementsByClassName('b'+m)[0].style.visibility='hidden'
            if(m==4)
                document.getElementsByClassName('b'+m)[0].style.visibility='hidden'
        }
        break
    case 5:
        for(m=0; m<6; m++){
            if(m==0)
                document.querySelector('.b0').classList.add('a0new')
            if(m==2)
                document.querySelector('.b2').classList.add('a2new')
            if(m==4)
                document.querySelector('.b4').style.visibility='hidden'
        }
        break
}






if(player1 == player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Draw! <i class="fa-solid fa-flag-checkered"></i>'
else if(player1 > player2)
    document.getElementsByTagName('h1')[0].innerHTML='<i class="fa-solid fa-flag-checkered"></i> Player 1 wins!'
else
    document.getElementsByTagName('h1')[0].innerHTML='Player 2 wins! <i class="fa-solid fa-flag-checkered"></i>'
    



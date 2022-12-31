
'use strict'


// document.querySelector('.clickButton').addEventListener('click', clickBut)

function clickBut(){
    let player1 = Math.ceil(Math.random()*5)
    console.log('player1: '+ player1)
    
    let player2 = Math.ceil(Math.random()*5)
    console.log('player2: '+ player2)
    
    
    /*
    // without organizing the dots
    let j=0;
    for(let i=0; i<hide1; i++)
        document.getElementsByClassName('a'+i)[j].style.visibility='hidden'
    for(let i=0; i<hide2; i++)
        document.getElementsByClassName('b'+i)[j].style.visibility='hidden'
    */


    //with organizing the dots
    // reset the previous positions & visibilities of dots
    let k=0
    for(k=0; k<6; k++){
        let resetPlayer1 = document.querySelector('.a'+k)
        resetPlayer1.classList.remove('a0new')
        resetPlayer1.classList.remove('a2new')
        resetPlayer1.style.visibility='visible'
    }

    for(k=0; k<6; k++){
        let resetPlayer2 = document.querySelector('.b'+k)
        resetPlayer2.classList.remove('a0new')
        resetPlayer2.classList.remove('a2new')
        resetPlayer2.style.visibility='visible'
    }

    
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
    }


    if(player1 == player2)
        document.getElementById('winner').innerHTML='<i class="fa-solid fa-flag-checkered"></i> Draw! <i class="fa-solid fa-flag-checkered"></i>'
    else if(player1 > player2)
        document.getElementById('winner').innerHTML='<i class="fa-solid fa-flag-checkered"></i> Player 1 wins!'
    else
        document.getElementById('winner').innerHTML='Player 2 wins! <i class="fa-solid fa-flag-checkered"></i>'

}



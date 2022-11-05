const rules = document.querySelector('.rules');
const rulespop = document.querySelector('.rulespopup');
const close = document.querySelector('.cross');
const it = document.querySelectorAll('.it');
const line = document.querySelectorAll('.line');
const house = document.querySelector('.house');
const game = document.querySelector('.game');
const text = document.querySelector('.textarea');
const score = document.querySelector('.scorecounter');
const button = document.querySelector('.button');
let fame;
played = false;
i = 0;
rules.addEventListener('click', event =>{
    rulespop.style.scale = 1;
})

close.addEventListener('click', event => {
    rulespop.style.scale = 0;
})
it.forEach(element => {
    element.addEventListener('click', clicker);
})
function clicker(){
    if(played == false){it.forEach(element => {
        console.log(element);
        element.classList.remove('back');
        element.style.visibility = 'hidden';
    })
    this.classList.add(`${this.classList[1]}2`);
        line.forEach(element => {
            element.classList.add(`linehide`);
        });
    house.classList.add('house2');
    game.classList.add('game2');
    window.setTimeout(botter, 900)
    
    played = true;
    }
    fame = this;
}

function botter(){
    let bot = Math.floor(Math.random() * 3);
    while(it[bot].classList[1] == fame.classList[1]){
        bot = Math.floor(Math.random() * 3);
    }
    it[bot].classList.add('op');
    if(fame.classList[1] == "scissor" && it[bot].classList[1] == "paper" || fame.classList[1] == "paper" && it[bot].classList[1] == "rock" || fame.classList[1] == "rock" && it[bot].classList[1] == "scissor"){
        text.style.visibility = 'visible';
        button.style.visibility = 'visible';
        text.textContent = 'YOU WON';
        fame.classList.add('gradie');
        i+=1;
        score.textContent = i;
        text.style.color = 'green';
        console.log("You Won");
    }else if(fame.classList[1] == "scissor" && it[bot].classList[1] == "rock" || fame.classList[1] == "rock" && it[bot].classList[1] == "paper" || fame.classList[1] == "paper" && it[bot].classList[1] == "scissor"){
        text.style.visibility = 'visible';
        button.style.visibility = 'visible';
        text.textContent = 'YOU LOST';
        text.style.color = 'red';
        it[bot].classList.add('gradie');
        if(i <= 0){
            i = 0;
        }else{
        i-=1;}
        score.textContent = i;
        console.log("You Lost");
    }
}

button.addEventListener('click', event =>{
    it.forEach(element => {
        console.log(element);
        element.classList.add('back');
        element.classList.remove(`${element.classList[1]}2`);
        element.classList.remove('op');
        element.classList.remove('gradie');
        
    })
    line.forEach(element => {
            element.classList.remove(`linehide`);
        });
        house.classList.remove('house2');
        game.classList.remove('game2');
        text.style.visibility = 'hidden';
        button.style.visibility = 'hidden';
        played = false;
})
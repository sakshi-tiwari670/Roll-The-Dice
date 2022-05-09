'use strict'
/*Selecting items*/
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice')
const curr0= document.querySelector('#current--0');
const curr1= document.querySelector('#current--1')

/*Intializing values*/
let activeplayer=0;
let currScore=0;
let playing=true;
score0.textContent=0;
score1.textContent=0;


dice.classList.add('hidden');

/*Switch player function*/
const switchplayer=function()
{
    document.getElementById(`current--${activeplayer}`).textContent=0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    activeplayer=activeplayer==0?1:0;
    currScore=0;
     document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
};


document.querySelector('.btn--roll').addEventListener('click',function()
{
    if(playing)
    {
    const currdice=Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');
    dice.src=`dice-${currdice}.png`;
    if(currdice!=1)
    {
        currScore+=currdice;
        document.getElementById(`current--${activeplayer}`).textContent=currScore;
        }
    else
    {   /*Switch player*/
      switchplayer();
}
}
})
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(playing)
    {
    document.querySelector(`#score--${activeplayer}`).textContent=Number(document.querySelector(`#score--${activeplayer}`).textContent)+currScore;
    if(Number(document.querySelector(`#score--${activeplayer}`).textContent)>=10)
    {
        /*Player won*/
        playing=false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')

    }
    else
    {
   switchplayer();
    }
    }
})

/*Restting the game*/
document.querySelector('.btn--new').addEventListener('click',function()
{
    playing=true;
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#current--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    document.querySelector('#current--1').textContent=0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
   document.querySelector('.player--0').classList.add('player--active')
    activeplayer=0;
    currScore=0;
})

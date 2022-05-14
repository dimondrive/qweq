//var cards_block=document.querySelector('.cards');
//var cards = document.querySelectorAll('.cards>div');

//function start(){
//    var random=Math.floor(Math.random()*8);
 //   cards_block.style.left=-random*100+'px';

//    setTimeout(function(){ 
 //       random++;
  //      cards[random].style.background='red';
   //     cards[random].style.color='#161D1';
   // },5000);

//}


const openPopUp=document.getElementById('open_pop_up');
const closePopUp=document.getElementById('pop_up_close');

const popUp=document.getElementById('pop_up');


openPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');

})

closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
})
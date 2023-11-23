// filter
const homepage = document.getElementsByClassName('homepage');
const lp = document.getElementsByClassName('lp');
const game = document.getElementsByClassName('game');

//リセット
function reset(){
  for(let i = 0; i < homepage.length; i++){
    homepage[i].classList.add('u-hidden')
    homepage[i].classList.remove('scaleUp')
  }
  for(let i = 0; i < lp.length; i++){
    lp[i].classList.add('u-hidden')
    lp[i].classList.remove('scaleUp')
  }
  for(let i = 0; i < game.length; i++){
    game[i].classList.add('u-hidden')
    game[i].classList.remove('scaleUp')
  }
}

//all
function show__all(){
  reset();
  for(let i = 0; i < homepage.length; i++){
    homepage[i].classList.add('scaleUp')
    homepage[i].classList.remove('u-hidden')
  }
  for(let i = 0; i < lp.length; i++){
    lp[i].classList.add('scaleUp')
    lp[i].classList.remove('u-hidden')
  }
  for(let i = 0; i < game.length; i++){
    game[i].classList.add('scaleUp')
    game[i].classList.remove('u-hidden')
  }
}

//homepage
function show__homepage(){
  reset();
  for(let i = 0; i < homepage.length; i++){
    homepage[i].classList.add('scaleUp')
    homepage[i].classList.remove('u-hidden')
  }
}

//lp
function show__lp(){
  reset();
  for(let i = 0; i < lp.length; i++){
    lp[i].classList.add('scaleUp')
    lp[i].classList.remove('u-hidden')
  }
}

//game
function show__game(){
  reset();
  for(let i = 0; i < game.length; i++){
    game[i].classList.add('scaleUp')
    game[i].classList.remove('u-hidden')
  }
}
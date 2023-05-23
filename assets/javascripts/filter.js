// filter
const javascript = document.getElementsByClassName('javascript');
const react = document.getElementsByClassName('react');
const laravel = document.getElementsByClassName('laravel');

//リセット
function reset(){
  for(let i = 0; i < javascript.length; i++){
    javascript[i].classList.add('u-hidden')
    javascript[i].classList.remove('scaleUp')
  }
  for(let i = 0; i < react.length; i++){
    react[i].classList.add('u-hidden')
    react[i].classList.remove('scaleUp')
  }
  for(let i = 0; i < laravel.length; i++){
    laravel[i].classList.add('u-hidden')
    laravel[i].classList.remove('scaleUp')
  }
}

//all
function show__all(){
  reset();
  for(let i = 0; i < javascript.length; i++){
    javascript[i].classList.add('scaleUp')
    javascript[i].classList.remove('u-hidden')
  }
  for(let i = 0; i < react.length; i++){
    react[i].classList.add('scaleUp')
    react[i].classList.remove('u-hidden')
  }
  for(let i = 0; i < laravel.length; i++){
    laravel[i].classList.add('scaleUp')
    laravel[i].classList.remove('u-hidden')
  }
}

//javascript
function show__javascript(){
  reset();
  for(let i = 0; i < javascript.length; i++){
    javascript[i].classList.add('scaleUp')
    javascript[i].classList.remove('u-hidden')
  }
}

//react
function show__react(){
  reset();
  for(let i = 0; i < react.length; i++){
    react[i].classList.add('scaleUp')
    react[i].classList.remove('u-hidden')
  }
}

//laravel
function show__laravel(){
  reset();
  for(let i = 0; i < laravel.length; i++){
    laravel[i].classList.add('scaleUp')
    laravel[i].classList.remove('u-hidden')
  }
}
// セクションタイトル用
function slideIn__normal(){
  const target = document.getElementsByClassName('jsi-slideIn__normal');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('slideIn__normal');
    }
  }
}

// セクションタイトルの下線を遅れて表示
function slideIn__delay(){
  const target = document.getElementsByClassName('jsi-slideIn__delay');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('slideIn__delay');
    }
  }
}

// Strength-iconのフリップイン
function flipIn(){
  const target = document.getElementsByClassName('jsi-flipIn');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('flipIn');
    }
  }
}

// Strength-textのフェイドイン
function fadeIn(){
  const target = document.getElementsByClassName('jsi-fadeIn');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('fadeIn');
    }
  }
}

// skillのスライドイン（画面右外から）
function slideIn__right(){
  const target = document.getElementsByClassName('jsi-slideIn__right');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('slideIn__right');
    }
  }
}

// skillのバー
function skillBar(){
  const target = document.getElementsByClassName('jsi-skillBar');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('skillBar');
    }
  }
}

// contact
function bounce(){
  const target = document.getElementsByClassName('jsi-bounce');

  for(let i = 0; i <target.length; i++){
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);      
    if(offsetTop < innerHeight){
      target[i].classList.add('bounce');
    }
  }
}

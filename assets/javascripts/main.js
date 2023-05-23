//各セクションを取得
const about = document.getElementById('about'),
      work = document.getElementById('work'),
      blog = document.getElementById('blog'),
      contact = document.getElementById('contact'),
      header = document.getElementById('header')

  //セクション判定を行い、該当箇所のメニュー表示を赤くする。
  function judgeSection(start, end, target){
    if(start < 0){
      document.getElementById(`${target}`).classList.add('is-red')
    }
    if(end < innerHeight/2 || start > innerHeight/2){
      document.getElementById(`${target}`).classList.remove('is-red')
    }
  }

  //固定ヘッダーの処理
  function fixHeader(){ 
    let scrollPoint = 0;
    scrollPoint = window.scrollY;
    if(scrollPoint > window.innerHeight){                 // ヒーローセクションを下回るとヘッダーを出す。
      header.classList.add('is-show');
    }else{                                                //ヒーローセクションに戻るとヘッダーを隠す
      header.classList.remove('is-show');
    }
  }

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

//スクロール時の挙動
window.addEventListener('scroll', function(){
  const aboutMenu = 'menu__about',
        workMenu = 'menu__work',
        blogMenu = 'menu__blog',
        contactMenu = 'menu__contact'

//各セクションの表示領域を取得
  let aboutPosStart = about.getBoundingClientRect().top,
      aboutPosEnd = about.getBoundingClientRect().bottom,
      workPosStart = work.getBoundingClientRect().top,
      workPosEnd = work.getBoundingClientRect().bottom,
      blogPosStart = blog.getBoundingClientRect().top,
      blogPosEnd = blog.getBoundingClientRect().bottom,
      contactPosStart = contact.getBoundingClientRect().top,
      contactPosEnd = contact.getBoundingClientRect().bottom

  fixHeader();
  judgeSection(aboutPosStart,aboutPosEnd,aboutMenu);
  judgeSection(workPosStart,workPosEnd,workMenu);
  judgeSection(blogPosStart,blogPosEnd,blogMenu);
  judgeSection(contactPosStart,contactPosEnd,contactMenu);
  slideIn__normal();
  slideIn__delay();
})

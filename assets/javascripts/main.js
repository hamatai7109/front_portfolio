//ロード時（webページが読み込まれた時）


//スクロール時の挙動
window.addEventListener('scroll', function(){
const aboutMenu = 'menu__about';
const workMenu = 'menu__work';
const blogMenu = 'menu__blog';
const contactMenu = 'menu__contact';

  //各セクションの表示領域を取得
let aboutPosStart = about.getBoundingClientRect().top;
let aboutPosEnd = about.getBoundingClientRect().bottom;
let workPosStart = work.getBoundingClientRect().top;
let workPosEnd = work.getBoundingClientRect().bottom;
let blogPosStart = blog.getBoundingClientRect().top;
let blogPosEnd = blog.getBoundingClientRect().bottom;
let contactPosStart = contact.getBoundingClientRect().top;
let contactPosEnd = contact.getBoundingClientRect().bottom;

//スクロール関係
let scrollPoint = 0;

//セクション判定を行い、該当箇所のメニュー表示を赤くする。
function judgeSection(start, end, target){
  if(start < 0){
    document.getElementById(`${target}`).classList.add('is-red')
  }
  if(end < 0 || start >=0){
    document.getElementById(`${target}`).classList.remove('is-red')
  }
}

const header = document.getElementById('header');

//固定ヘッダーの処理
function fixHeader(){
  scrollPoint = window.scrollY;
  if(scrollPoint > window.innerHeight){                 // ヒーローセクションを下回るとヘッダーを出す。
    header.classList.add('is-show');
  }else{                                                //ヒーローセクションに戻るとヘッダーを隠す
    header.classList.remove('is-show');
  }
}

  fixHeader();
  judgeSection(aboutPosStart,aboutPosEnd,aboutMenu);
  judgeSection(workPosStart,workPosEnd,workMenu);
  judgeSection(blogPosStart,blogPosEnd,blogMenu);
  judgeSection(contactPosStart,contactPosEnd,contactMenu);
})

  const ham = document.getElementById('jsi-hamburger');
  const menu = document.getElementById('jsi-menubar');
  const overlay = document.getElementById('jsi-overlay');

  ham.addEventListener('click', function(){
    this.classList.add('u-hidden');
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
  })

  menu.addEventListener('click', function(){
    ham.classList.remove('u-hidden');
    this.classList.remove('is-open');
    overlay.classList.remove('is-open');
  })

  overlay.addEventListener('click', function(){
    ham.classList.remove('u-hidden');
    menu.classList.remove('is-open');
    this.classList.remove('is-open');
  })

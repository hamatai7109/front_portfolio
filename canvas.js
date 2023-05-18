//Canvasの初期値を取得
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; //横幅
canvas.height = window.innerHeight; //縦幅

//2D画面での使用
var c = canvas.getContext('2d'); //c stands for content 

//変数
var mouse = {x:undefined, y:undefined};
var maxRadius = 80;

//色の配列
var colorArray = [
  '#F4A9A0',
  '#F3E9C0',
  '#AFE6BE',
  '#A6B4E6',
  '#D9A7EB'
];


//画面幅を変える度に、その都度、画面幅を取得し、◯をつくりなおす。
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth; //横幅
  canvas.height = window.innerHeight; //縦幅
  init();
})

//マウスを乗せた場所の値を取得
window.addEventListener('mousemove',
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;    
  }
)

//コピー原本（円の設計図）
function Circle(x, y, dx, dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  //円を描いて、ランダムの色に塗りつぶす
  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0 ,Math.PI * 2, false );
    c.fillStyle = this.color;
    c.fill();
  }

  //円が画面幅を20px超えると跳ね返る挙動。
  this.update = function(){
    if(this.x + this.radius > innerWidth + 20 || this.x - this.radius < 20){
      this.dx = - this.dx;
    }
    if(this.y + this.radius > innerHeight + 20 || this.y - this.radius< 20){
      this.dy = - this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //マウスを乗せた箇所が大きくなる。
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y -this.y < 50 && mouse.y - this.y > -50){ //マウスが半径50px以内だと、円が大きくなる。
      if(this.radius < maxRadius){
        this.radius += 1;
      }
    }else if(this.radius > this.minRadius){//マウスが半径50pxより外だと、円が小さくなる。
      this.radius -= 1;
    }
  }
}

//500個の◯を作る。
var circleArray = [];
function init(){

  circleArray = [];//初期化

  for (let i = 0; i < 500; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) ; //横に動くスピード
    var dy = (Math.random() - 0.5) ; //縦に動くスピード
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }
}

//作成した円を動かす。
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight); //一旦前回分の動きをリセット。これをしないと塗りつぶしながら移動する。

  for(let i = 0; i < circleArray.length; i++){
    circleArray[i].draw();
    circleArray[i].update();
  }
}
init();
animate();
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



// window.addEventListener( 'load', function() {
//   //FVのスライド
//   $(function() {
//     const infiniteSlider = new Swiper("#jsi-swiper", {
//       loop: false,
//       speed: 1500,
//       effect:'fade',
//       autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//       },
//       breakpoints: {
//         796: {
//           autoplay: {
//             reverseDirection: true,
//           }
//         }
//       }
//     });
//   });
  
//    //ホバーすると文字と背景を大きし、ホバーを外すと元の大きさに戻る。
//   $(function () {
//     $('#jsi-news__button')
//       .mouseover(function() {
//         $(this).animate({fontSize : '24px'}, 300);//アニメーションしながら大きくなる
//         $(this).parent().animate({width:'400px'}, 300);//親要素の幅も同時に大きくする
//       })
//       .mouseout(function() {//ここにはマウスを離したときの動作を記述
//         $(this).animate({fontSize : '16px'}, 300);//アニメーションしながら元のサイズに戻る
//         $(this).parent().animate({width:'300px'}, 300);//親要素の幅も元のサイズに戻る
//       });
//   });
//   
// }, false);

const about = document.getElementById('about');
const work = document.getElementById('work');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

window.addEventListener('scroll', function(){
  let aboutPosStart = about.getBoundingClientRect().top;
  let aboutPosEnd = about.getBoundingClientRect().bottom;
  let workPosStart = work.getBoundingClientRect().top;
  let workPosEnd = work.getBoundingClientRect().bottom;
  let blogPosStart = blog.getBoundingClientRect().top;
  let blogPosEnd = blog.getBoundingClientRect().bottom;
  let contactPosStart = contact.getBoundingClientRect().top;
  let contactPosEnd = contact.getBoundingClientRect().bottom;

  if(aboutPosStart < 0){
    document.getElementById('menu__about').classList.add('is-red')
  }
  if(aboutPosEnd < 0 || aboutPosStart >= 0){
    document.getElementById('menu__about').classList.remove('is-red')
  }
  if(workPosStart < 0){
    document.getElementById('menu__work').classList.add('is-red')
  }
  if(workPosEnd < 0 || workPosStart >= 0){
    document.getElementById('menu__work').classList.remove('is-red')
  }
  if(blogPosStart < 0){
    document.getElementById('menu__blog').classList.add('is-red')
  }
  if(blogPosEnd < 0 || blogPosStart >= 0){
    document.getElementById('menu__blog').classList.remove('is-red')
  }
  if(contactPosStart < 0){
    document.getElementById('menu__contact').classList.add('is-red')
  }
  if(contactPosEnd < 0 || contactPosStart >= 0){
    document.getElementById('menu__contact').classList.remove('is-red')
  }
})
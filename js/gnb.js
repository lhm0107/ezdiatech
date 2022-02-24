const gnb = document.querySelector('.global-header .gnb');
const gnbNav = document.querySelector('.gnb-nav')

gnbNav.addEventListener('mouseenter',function(){
  gnb.classList.add('is-open')
})
const gnb = document.querySelector('.global-header .gnb');
const gnbNav = document.querySelector('.gnb-nav');
const gnbNavList = document.querySelector('.gnb-nav-list');


gnbNav.addEventListener('mouseenter',function(){
  gnb.classList.add('is-open');
  gnbNavList.classList.add('is-open');
})
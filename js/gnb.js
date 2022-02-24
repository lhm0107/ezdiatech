const gnb = document.querySelector('.global-header .gnb');
const gnbNavList = document.querySelector('.gnb-nav-list');
const gnbNavWrap = document.querySelector('.gnb-nav-wrap');

function gnbNavOpen() {
	gnb.classList.add('is-open');
	gnbNavList.classList.add('is-open');
	gnbNavWrap.classList.add('is-open');
}

gnbNavWrap.addEventListener('mouseenter', gnbNavOpen);

function gnbNavClose() {
	gnbNavList.classList.remove('is-open');
	gnbNavWrap.classList.remove('is-open');
	gnb.classList.remove('is-open');
}

const gnbNavWrapIsOpen = document.querySelector('.gnb-nav-wrap.is-open');

gnbNavWrap.addEventListener('mouseleave', gnbNavClose);

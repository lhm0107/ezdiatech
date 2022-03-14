const gnb = document.querySelector('.global-header .gnb');
const gnbNavList = document.querySelector('.gnb-nav-list');
const gnbNavWrap = document.querySelector('.gnb-nav-wrap');
const globalHeader = document.querySelector('.global-header');

function gnbNavOpen() {
	gnb.classList.add('is-open');
	gnbNavList.classList.add('is-open');
	gnbNavWrap.classList.add('is-open');
	gnb.classList.remove('is-top');
	globalHeader.classList.remove('is-top');
}

gnbNavWrap.addEventListener('mouseenter', gnbNavOpen);

function gnbNavClose() {
	gnbNavList.classList.remove('is-open');
	gnbNavWrap.classList.remove('is-open');
	gnb.classList.remove('is-open');
	gnb.classList.add('is-top');
	globalHeader.classList.add('is-top');
}

const gnbNavWrapIsOpen = document.querySelector('.gnb-nav-wrap.is-open');

gnbNavWrap.addEventListener('mouseleave', gnbNavClose);

document.addEventListener('scroll', function(){
	let mainScrollHeight = window.scrollY
	if (mainScrollHeight == 0) {
		gnb.classList.add('is-top');
	globalHeader.classList.add('is-top');
	} else if (mainScrollHeight > 0) {
			gnb.classList.remove('is-top');
	globalHeader.classList.remove('is-top');
	}
})


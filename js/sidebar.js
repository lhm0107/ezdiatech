const sidebarButton = document.querySelector('.gnb-menu-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const sidebarCloseButton = document.querySelector('.sidebar-close-button');

function openSidebar() {
	sidebar.classList.add('is-open');
	overlay.classList.add('is-active');
}

function closeSidebar() {
	sidebar.classList.remove('is-open');
	overlay.classList.remove('is-active');
}

sidebarButton.addEventListener('click', openSidebar);
sidebarCloseButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

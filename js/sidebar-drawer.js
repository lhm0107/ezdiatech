const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button');

function toggleDrawerMenu() {
	const drawerMenuList = this.parentNode;
	drawerMenuList.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
	button.addEventListener('click', toggleDrawerMenu);
});

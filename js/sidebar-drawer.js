const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button');
console.log(drawerMenuButtonList);

function toggleDrawerMenu() {
	const drawerMenuItem = this.parentNode;
	const drawerMenuList = drawerMenuItem.parentNode;
	drawerMenuList.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
	button.addEventListener('click', toggleDrawerMenu);
});

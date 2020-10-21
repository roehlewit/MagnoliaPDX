// UI Variables
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('toggle');
// EL for nav menu
menuBtn.addEventListener('click', toggle);

function toggle() {
	if(menu.style.opacity == '0' || menu.style.opacity == ''){
		menu.style.opacity = '1';
	} else {
		menu.style.opacity = '0';
	}
}


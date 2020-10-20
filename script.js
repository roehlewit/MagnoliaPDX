// UI Variables
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('toggle');

//Form variables
const form = document.getElementById('submit');
const name = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// EL for nav menu
menuBtn.addEventListener('click', () => {
	if (menu.style.opacity === '0') {
		menu.style.opacity = '1';
	} else {
		menu.style.opacity = '0';
	}
});



AOS.init({ duration: 500 });

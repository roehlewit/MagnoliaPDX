// UI Variables
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.toggle');




// EL for nav menu
menuBtn.addEventListener('click', () => {
	if (menu.style.display === 'none') {
		menu.style.display = 'flex',
		menu.style.height = 0 + '30px';
	} else {
        menu.style.display = 'none';
	}
});

 

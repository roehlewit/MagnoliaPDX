//Variables
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.toggle');

//Event Listeners
menuBtn.addEventListener('click', () => {
	if (menu.style.display === 'none') {
        menu.style.transition = 'all 1s';
        menu.style.display = 'flex';
        menu.style.opacity = '1';
	} else {
        menu.style.display = 'none';
	}
});



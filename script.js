// UI Variables
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.toggle');
const form = document.getElementById('contact');

// State functions for contact form & gallery

const PageState = function() {
        let currentState = contactState(this);

        this.init = function () {
          this.change(new contactState);
        }

        this.change = function(state) {
          currentState = state;
        }
};


// EL for nav menu
menuBtn.addEventListener('click', () => {
	if (menu.style.display === 'none') {
        menu.style.display = 'flex';
	} else {
        menu.style.display = 'none';
	}
});

 

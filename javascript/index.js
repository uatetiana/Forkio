(function () {
	let on = document.querySelector('.header__on-zone');
	let off = document.querySelector('.header__off-zone');
	let menu = document.querySelector('.header__list');
	let nav = document.querySelector('.header__burger-box');
	menu.classList.add('toggle');

	nav.addEventListener("click", (event) => {
		if (event.target.dataset.toggle == 'on') {
			on.style.display = "none";
			off.style.display = "block";
			menu.classList.add('header__list--relative');
			menu.classList.remove('toggle');
		}
		else if (event.target.dataset.toggle == 'off') {
			on.style.display = "block";
			off.style.display = "none";
			menu.classList.add('toggle');
			menu.classList.remove('header__list--relative');
		} else {
			menu.classList.remove('toggle');
		}
	})
})()

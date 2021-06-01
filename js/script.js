let callupModal = document.querySelector('.callup-modal');
let close = document.querySelector('.close');
let handel = document.querySelector('.handel');

document.addEventListener('click', function(event){
	if (event.target.dataset.open != undefined){
		callupModal.classList.add ('schow');	
		handel.style.display = 'block';
	}
})

document.addEventListener('click', function(event){
	if (event.target.dataset.close != undefined){
		let show = event.target.closest('.schow');
		show.classList.remove('schow');
		handel.style.display = 'none';
	}
})

let products = [];
let GOOGLE__API = 'AIzaSyBGeFtI5nNBzxeyUrCws33SQ-dCsOvPF0M'


let cars = document.querySelector('#cars')



let logo = document.querySelector('.header__logo')

let token = localStorage.token


if (token) {
	logo.textContent = 'Chiqish'
}

logo.addEventListener('click', () => {
	token = ''
})


fetch('https://www.googleapis.com/books/v1/volumes?q=java&startIndex=0&maxResults=40')
	.then((res) => res.json())
	.then((data) => {
		let result = data.items.filter((product) => {

			if (product.id) {
				return product
			}
		})
		products = result;
	});

let array = []

ul.addEventListener('click', (evt) => {
	let target = evt.target
	if (target.id.includes('info__btn')) {
		const id = target.dataset.id;
		products.forEach((elment) => {
			if (elment.id == id) {
				infoRadom(elment)
			}
		})
	}

})


let sarche = document.querySelector('#sarche')

sarche.addEventListener('input',(evt)=>{
let value = evt.target.value
fetch( `https://www.googleapis.com/books/v1/volumes?q=${value}&key=` + GOOGLE__API)
	.then((res) => res.json())
	.then((data) => {
		let result = data.items.filter((product) => {

			if (product.id) {
				return product
			}
		})
		products = result;
		newBook(products)
	})
})


cars.addEventListener('change',(evt)=>{
let value = evt.target.value

fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=newest&key=` + GOOGLE__API)
	.then((res) => res.json())
	.then((data) => {
		let result = data.items.filter((product) => {

			if (product.id) {
				return product
			}
		})
		products = result;
		newBook(products)
	})
})
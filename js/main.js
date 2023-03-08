let GOOGLE__API = 'AIzaSyBGeFtI5nNBzxeyUrCws33SQ-dCsOvPF0M'
let products = [];
let sarche = document.querySelector('#sarche')

let cars = document.querySelector('#cars')



let logo = document.querySelector('.header__logo')

let token = localStorage.token


if (token) {
	logo.textContent = 'Chiqish'
}

if (!token) {
	window.location.href = './login.html'
}

logo.addEventListener('click', ()=>{
	if(logo.textContent =='Chiqish'){
localStorage.removeItem('token');
	}
})



sarche.addEventListener('input', (evt) => {
	let value = evt.target.value
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=` + GOOGLE__API)
		.then((res) => res.json())
		.then((data) => {
			if (value == '') {
				newBook(products.slice(0, 6))
				console.log('salom');
			} else {
				let result = data.items.filter((product) => {
					if (product.id) {
						return product
					}
				})
				products = result;
				newBook(products.slice(0, 6))
			}
		})
})


cars.addEventListener('change', (evt) => {
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
			newBook(products.slice(0, 6))
		})
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





ul.addEventListener('click', (evt) => {
	let target = evt.target
	if (target.id.includes('main__bookmark')) {
		const id = target.dataset.id;
		products.forEach((item) => {
			if (item.id == id) {
				let product = arr.find((item) => item.id == id);
				if (!product) {
					arr.push(item);
				}
			}
			bookmarkRadom(arr)
		})
	}
})


elul.addEventListener('click', (evt) => {
	let target = evt.target
	let arr2 = []
	if (target.id.includes('imgen')) {
		const id = target.dataset.id;
		arr.forEach((elment) => {
			if (elment.id !== id) {
				arr2.push(elment)
			}
		})
		arr = arr2
		bookmarkRadom(arr2)
	}
})






let allProductCount = 0;
let activePage = 1;
let elPaginationList = findElement('.pagination');
let PageSize = 6;

const getData = async () => {
	try {
		const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=java&startIndex=0&maxResults=40');


		if (res.status === 404) {
			throw new Error("Qaytadan urinib ko'ring")
		}
		const res2 = await res.json();

		allProductCount = res2.items.length;

		products = res2.items;



		elPaginationList.innerHTML = `
      <li id="prev" class="opacity-50 page-item page-link">
      &laquo;
      </li>
      `

		for (let i = 0; i < Math.ceil(allProductCount / PageSize); i++) {

			let newLi = document.createElement('li');

			newLi.className = 'page-item  page-link page-number';
			newLi.textContent = i + 1;

			if (activePage == i + 1) {
				newLi.style.color = 'white';
				newLi.style.background = 'blue'
			}

			elPaginationList.appendChild(newLi)
		}
		elPaginationList.innerHTML += `
      <li id="next" class="page-item  page-link">             
       &raquo;
      </li>
      `
		newBook(res2.items.slice(0, 6))


	}
	catch (err) {
		console.log(err)
	}
	finally { }

}


elPaginationList.addEventListener('click', (evt) => {
	const prevBtn = document.querySelector('#prev');
	const nextBtn = document.querySelector('#next');
	if (evt.target.className.includes('page-number')) {
		const page = evt.target.textContent;
		activePage = page;



		if (true) {
			newBook(products.slice(PageSize * (page - 1), PageSize * page));
		}



	}
	if (evt.target.id === 'prev') {

		if (activePage != 1) {
			activePage--
			console.log(newBook(products.slice(PageSize * (activePage - 1), PageSize * activePage)))

		}

	}
	if (evt.target.id === 'next') {
		activePage++;
		newBook(products.slice(PageSize * (activePage - 1), PageSize * activePage));

	}
	const lastPage = Math.ceil(products.length / PageSize)

	if (activePage == 1) {
		prevBtn.className = 'opacity-50 page-item page-link'
	}
	else {
		prevBtn.className = 'page-item page-link'
	}
	elPaginationList.innerHTML = `
<li id="prev" class="${activePage == 1 ? 'opacity-50' : ''} page-item page-link">
&laquo;
</li>
`

	for (let i = 0; i < Math.ceil(allProductCount / PageSize); i++) {

		let newLi = document.createElement('li');

		newLi.className = 'page-item  page-link page-number';
		newLi.textContent = i + 1;

		if (activePage == i + 1) {
			newLi.style.color = 'white';
			newLi.style.background = 'blue'
		}
		elPaginationList.appendChild(newLi)
	}
	elPaginationList.innerHTML += `
<li id="next" class="${activePage == lastPage ? 'opacity-50' : ''} page-item  page-link">             
&raquo;
</li>
`
})

getData();



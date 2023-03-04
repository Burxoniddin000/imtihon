let products = [];

fetch('https://www.googleapis.com/books/v1/volumes?q=java&startIndex=0&maxResults=40')
	.then((res) => res.json())
	.then((data) => {
		newBook(data)
		let result = data.items.filter((product) => {

			if (product.id) {
				return product
			}
		})
		products = result;
	});

// lfHo7uMk7r4C
// lfHo7uMk7r4C

ul.addEventListener('click', (evt) => {
	let target = evt.target
	if (target.id.includes('info__btn')) {
		const id = target.dataset.id;
		products.forEach((elment) => {
			console.log(elment.id);
			if (elment.id === id) {
				infoRadom(products)
			}
		})
	}
})
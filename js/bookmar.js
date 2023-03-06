let elul = document.querySelector('.main__section__sitey')
let bookmarTempelet = document.querySelector('#bookmar-tempelet')
let arr = []

let products = []

fetch('https://www.googleapis.com/books/v1/volumes?q=java&startIndex=0&maxResults=40')
    .then((res) => res.json())
    .then((data) => {
        // newBook(data)
        let result = data.items.filter((product) => {

            if (product.id) {
                return product
            }
        })
        products = result;
    });

function bookmarkRadom(array) {
    elul.textContent = ''
    array.forEach((array) => {
        const newbokmark = bookmarTempelet.content.cloneNode(true);
        const items = findElement('#item__text', newbokmark);
        const name = findElement('#item__name', newbokmark);
        const imgen = findElement('#imgen', newbokmark);
        const img = findElement('#img', newbokmark);
        imgen.dataset.id = array.id
        items.textContent = array.volumeInfo.title
        name.textContent = array.volumeInfo.authors[0]
        elul.appendChild(newbokmark)
        img.addEventListener('click', () => {
            window.location.href = `${array.volumeInfo.infoLink}`;
        })
    })
}

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




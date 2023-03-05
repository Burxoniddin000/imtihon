let ul = findElement('#cretElement')
let eltelplet = findElement('#product-template')


function newBook(array) {
    ul.textContent = "";
    let item = array.items;
    item.forEach((element) => {
        const newBooks = eltelplet.content.cloneNode(true);
        const elbook = findElement('#book__img', newBooks);
        const elname = findElement('#cretElement__inner', newBooks);
        const elafter = findElement('#cretElement__taxt', newBooks);
        const elyers = findElement('#cretElement__namber', newBooks);
        const infoBtn = findElement('#info__btn', newBooks);
        const bookmark = findElement('#main__bookmark', newBooks);
        const li = findElement('#main__cretElement', newBooks);
        const li2 = findElement('.main__cretElement', newBooks);
        infoBtn.dataset.id = element.id
        bookmark.dataset.id = element.id

        elbook.src = element.volumeInfo.imageLinks.thumbnail;
        elname.textContent = element.volumeInfo.title
        elafter.textContent = element.volumeInfo.authors[0];
        elyers.textContent = element.volumeInfo.publishedDate;

        ul.appendChild(newBooks);

        // darmod.addEventListener('click', () => {
        //     if (them === "dark") {
        //         them = 'light';
        //         li.style.background = "#fff"
        //         li.style.background = "#212529"
        //     }
        //     else if (them === "light") {
        //         them = 'dark';
        //         li2.style.background = "#212529"
        //         li.style.background = "#fff"
        //     }
        // })
    });

}


ul.addEventListener('click', (evt) => {
    let target = evt.target
    if (target.id.includes('main__bookmark')) {
        const id = target.dataset.id;
        products.forEach((elment) => {
            if (elment.id == id) {
                bookmarkRadom(elment)
            }
        })
    }
})
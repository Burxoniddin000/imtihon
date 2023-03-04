let ul = findElement('#cretElement')
let eltelplet = findElement('#product-template')


function newBook(array) {
    // ul.textContent = "";
    let item = array.items;
    item.forEach((element) => {
        
        const newBooks = eltelplet.content.cloneNode(true);
        const elbook = findElement('#book__img', newBooks);
        const elname = findElement('#cretElement__inner', newBooks);
        const elafter = findElement('#cretElement__taxt', newBooks);
        const elyers = findElement('#cretElement__namber', newBooks);
        const infoBtn = findElement('#info__btn', newBooks);
        infoBtn.dataset.id = element.id
        console.log(element);

        elbook.src = element.volumeInfo.imageLinks.thumbnail;
        elname.textContent = element.volumeInfo.authors[0];
        elafter.textContent = element.publisher;
        elyers.textContent = element.publishedDate;

        ul.appendChild(newBooks);
    });
}


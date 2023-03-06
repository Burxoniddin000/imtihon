let ul = findElement('#cretElement')
let eltelplet = findElement('#product-template')



function newBook(array) {
    ul.textContent = "";

    array.forEach((element) => {
        const newBooks = eltelplet.content.cloneNode(true);
        const elbook = findElement('#book__img', newBooks);
        const elname = findElement('#cretElement__inner', newBooks);
        const elafter = findElement('#cretElement__taxt', newBooks);
        const elyers = findElement('#cretElement__namber', newBooks);
        const infoBtn = findElement('#info__btn', newBooks);
        const bookmark = findElement('#main__bookmark', newBooks);
        const mainread = findElement('.main__read', newBooks);
        infoBtn.dataset.id = element.id
        bookmark.dataset.id = element.id

        elbook.src = element.volumeInfo.imageLinks.thumbnail;
        elname.textContent = element.volumeInfo.title
        // elafter.textContent = element.volumeInfo.authors[0];
        elyers.textContent = element.volumeInfo.publishedDate;

        ul.appendChild(newBooks);
        let elImg = document.querySelector('.header__logo')

        mainread.addEventListener('click', () => {
            window.location.href = `${element.volumeInfo.infoLink}`;
        })

        elImg.addEventListener('click', () => {
            localStorage.setItem('id', element.id);
            window.location.href = './login.html';
        });

    });

}

let cerelmen =findElement('#offcanvasRight')

function infoRadom(array) {
    const newBook = eltelplet.content.cloneNode(true);
    array.forEach(element => {
        const elname = findElement('#offcanvasRightLabel', newBook)
        const infotaxt = findElement('#info__taxt', newBook)
        const span = findElement('#span', newBook)
        const info__namer = findElement('#info__namer', newBook)
        const publishers = findElement('#publishers', newBook)
        const categories = findElement('#categories', newBook)
        const pages = findElement('#pages', newBook)
        const infoimg = findElement('#info__img', newBook)

        elname.textContent = element.volumeInfo.authors[0];
        infoimg.src = element.volumeInfo.imageLinks.thumbnail;
        infotaxt.textContent = element.searchInfo.textSnippet
        span.textContent = element.volumeInfo.authors
        info__namer.textContent= element.publishedDate
        publishers.textContent= element.accessInfo.accessViewStatus
        categories.textContent =element.volumeInfo.categories[0]
        pages.textContent=element.volumeInfo.pageCount
        ul.appendChild(newBook);
    });
}
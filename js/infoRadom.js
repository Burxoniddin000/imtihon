
function infoRadom(element) {
    const elname = findElement('#offcanvasRightLabel')
    const infotaxt = findElement('#info__taxt')
    const span = findElement('#span')
    const info__namer = findElement('#info__namer')
    const publishers = findElement('#publishers')
    const categories = findElement('#categories')
    const pages = findElement('#pages')
    const infoimg = findElement('#info__img')

    elname.textContent = element.volumeInfo.title
    infoimg.src = element.volumeInfo.imageLinks.thumbnail;
    infotaxt.textContent = element.volumeInfo.description
    span.textContent = element.volumeInfo.authors
    info__namer.textContent= element.volumeInfo.publishedDate
    publishers.textContent= element.accessInfo.accessViewStatus
    categories.textContent =element.volumeInfo.categories[0]
    pages.textContent=element.volumeInfo.pageCount

}
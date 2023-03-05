let elul = document.querySelector('.main__section__sitey')
let bookmarTempelet = document.querySelector('#bookmar-tempelet')


function bookmarkRadom(array) {
    // console.log(array);
    const newbokmark = bookmarTempelet.content.cloneNode(true);
    const items = findElement('#item__text', newbokmark);
    const name = findElement('#item__name', newbokmark);
    items.textContent = array.volumeInfo.title
    name.textContent = array.volumeInfo.authors[0]
    elul.appendChild(newbokmark)

}



elul.addEventListener('click', (evt) => {
    let target = evt.target
    if (target.id.includes('imgen')) {
        const id = target.dataset.id;
        products.forEach((elment) => {
            if (!elment.id == id) {
                bookmarkRadom(elment)
            }
        })
    }
})


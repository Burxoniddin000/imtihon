let elul = document.querySelector('.main__section__sitey')
let bookmarTempelet = document.querySelector('#bookmar-tempelet')
let arr = []


function bookmarkRadom(array) {
    elul.textContent = ''
    array.forEach((array) => {
        const newbokmark = bookmarTempelet.content.cloneNode(true);
        const items = findElement('#item__text', newbokmark);
        const name = findElement('#item__name', newbokmark);
        const imgen = findElement('#imgen', newbokmark);
        const img = findElement('#img', newbokmark);
        const li = findElement('.item', newbokmark);
        imgen.dataset.id = array.id
        items.textContent = array.volumeInfo.title
        name.textContent = array.volumeInfo.authors[0]
        elul.appendChild(newbokmark)
        img.addEventListener('click', () => {
            window.location.href = `${array.volumeInfo.infoLink}`;
        })

       
    })
}



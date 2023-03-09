let elform = document.querySelector('#title')
let elImge = document.querySelector('#image')
let elprice = document.querySelector('#price')
let elrating = document.querySelector('#rating')
let eltitle = document.querySelector('.submit')
let elselect = document.querySelector('.select')
let temlet = document.querySelector('#temlet')
let ul = document.querySelector('.cretelment__ul')
let editimg = document.querySelector('#edit__img')
let editname = document.querySelector('#edit__name')
let editafter = document.querySelector('#edit__after')
let edityear = document.querySelector('#edit__year')
let btn = document.querySelector('.edit__submit')
let them = 'light';

let logo = document.querySelector('.header__addimi')


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


fetch(`https://63fde1a019f41bb9f655e570.mockapi.io/projets`)
    .then((res) => res.json())
    .then((data) => {

        radomNew(data)
    })


eltitle.addEventListener('click', () => {
    let value = elform.value
    let imde = elImge.value
    let rat = elrating.value
    let price = elprice.value

    let newProduct = {
        name: value,
        img: imde,
        rating: rat,
        price: price
    }

    fetch('https://63fde1a019f41bb9f655e570.mockapi.io/projets', {
        method: 'post',
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json())
        .then((data) => {
            window.location.reload(data)
        });



})



function radomNew(array) {

    array.forEach(element => {
        const newElent = temlet.content.cloneNode(true);
        const elImg = findElement('#cretelment__img', newElent);
        const eltaxt = findElement('#cretelment__taxt', newElent);
        const elname = findElement('#cretelment__inner', newElent);
        const elnamber = findElement('#cretelment__namber', newElent);
        const elcatigoriya = findElement('#cretelment__catigoriya', newElent);
        const delit = findElement('#delit', newElent);
        const edit = findElement('#edit', newElent);
        const editInput = findElement('.edit__input', newElent);
        const editInput2 = findElement('.edit__input2', newElent);
        const editInput3 = findElement('.edit__input3', newElent);
        const cretdiv = findElement('.cretelment__div', newElent);

        delit.dataset.id = element.id
        edit.dataset.id = element.id

        elImg.src = element.img
        eltaxt.textContent = element.rating
        elname.textContent = element.name
        elnamber.textContent = element.price

        ul.appendChild(newElent)

        ul.addEventListener('click', (evt) => {
            let value = evt.target
            if (value.id.includes('edit')) {
                let name = editname.value
                let img = editimg.value
                let year = edityear.value
                let after = editafter.value
                const id = Number(value.dataset.id);
                    if (id == element.id) {
                        btn.addEventListener('click', () => {
                            elImg.src = img
                            elname.textContent = name
                            elnamber.textContent = year
                            eltaxt.textContent = after
                        })
                    }
            }

        })
    });

}


ul.addEventListener('click', (evt) => {
    let value = evt.target

    if (value.id.includes('delit')) {
        const id = Number(value.dataset.id);

        fetch(`https://63fde1a019f41bb9f655e570.mockapi.io/projets/${id}`, {
            method: 'delete'
        }).then((res) => res.json())
            .then((data) => {
                window.location.reload()
            });
    }

})

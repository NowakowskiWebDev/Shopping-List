import {
    elements
} from './views/base';
import * as fun from './models/RenderFunctions';



elements.addBtn.addEventListener('click', e => {
    e.preventDefault();
    fun.renderProducts()
})





const classProductBtn = {
    done: 'btn--product-item-done',
    remove: 'btn--product-item-remove',
    edit: 'btn--product-item-edit',
    divLineActive: 'product__item-line--active'
};

const actualArrayValues = (event) => event.target.parentNode.parentNode.firstElementChild.firstElementChild.parentElement.children;

console.log(elements.oneProductAllBtn)

const aha = () => {
    elements.oneProductAllBtn
}

aha().forEach(oneBtn => oneBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(elements.oneProductAllBtn)
    const proba = (e) => {
        e.target.classList.forEach(el => {
            switch (el) {
                case classProductBtn.done:
                    // console.log(e.target.parentNode.classList.contains(`${classProductBtn.divLine}`).classList.toggle('product__item-line--active'))
                    // żeby dostać li
                    // console.log(e.target.parentNode.parentNode)
                    e.target.parentNode.parentNode.firstElementChild.lastElementChild.classList.toggle(`${classProductBtn.divLineActive}`)

                    // DO PROBY
                    // e.target.parentNode.parentNode.firstElementChild.firstElementChild.parentElement.children
                    break;
                case classProductBtn.remove:
                    e.target.parentNode.parentNode.remove()
                    break;
                case classProductBtn.edit:
                    // fun.renderEdit();
                    // const itemsList = [...e.target.parentNode.parentNode.firstElementChild.children]
                    // console.log(itemsList[0].textContent)
                    // console.log(itemsList[1].textContent)
                    // console.log(itemsList[2].textContent)
                    // console.log(itemsList[3].textContent)


                    // console.log(itemsList[4].textContent)

                    // getElementsByClassName
                    break;
            }
        })
    };
    proba(e);
}))
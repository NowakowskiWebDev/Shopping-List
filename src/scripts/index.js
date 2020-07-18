import {
    elements
} from './views/base';
import * as fun from './models/RenderFunctions';
import {
    cosh
} from 'core-js/fn/number';

// SEARCH---------------------------------------------------------

function searchWord() {
    let input = elements.searchInput.value;
    input = input.toLowerCase();
    let i
    for (i = 0; i < elements.productsName.length; i++) {
        if (!elements.productsName[i].innerHTML.toLowerCase().includes(input)) {
            elements.productsName[i].parentElement.parentElement.style.display = "none";
        } else {
            elements.productsName[i].parentElement.parentElement.style.display = "flex";
        }
    }
}


elements.searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchWord();
    elements.searchInput.value = '';
})


// PRODUCT CREATOR
const classProductBtn = {
    done: 'btn--product-item-done',
    remove: 'btn--product-item-remove',
    edit: 'btn--product-item-edit',
};

const tab = []
elements.addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (fun.renderProducts()) {
        // const groupBtn = document.querySelectorAll('.btn-product__group')
        // console.log(groupBtn)
        document.querySelectorAll('.btn-product__group')
        const doneBtn = document.querySelector('.btn--product-item-done');
        const removeBtn = document.querySelector('.btn--product-item-remove');
        const editBtn = document.querySelector('.btn--product-item-edit');
        // groupBtn.forEach(el => {
        //     el.addEventListener('click', console.log('aha'))
        // })
        tab.push(doneBtn)
        tab.push(removeBtn)
        tab.push(editBtn)
        console.log(tab)
    }
})



document.querySelectorAll('.btn-product__group').addEventListener('click', () => console.log('czesc'))


// console.log(groupBtn)
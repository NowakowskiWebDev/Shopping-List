import {
    elements
} from '../views/base';

// CLEAR INPUTS
const clearInput = () => {
    // elements.searchInput.value = '';
    elements.inputName.value = '';
    elements.inputCategory.value = '';
    elements.inputCount.value = '';
    elements.selectUnit.value = '';
};

// RENDER PRODUCTS
export const renderProducts = (count, unit, name, category) => {
    const markup = `
        <li class="product__item">
                        <div class="product__item-ingredients">
                            <p class="product__item-count">${count}</p>
                            <p class="product__item-unit">${unit}</p>
                            <p class="product__item-name">${name}</p>
                            <p class="product__item-category">${category}</p>
                        </div>
                        <div class="btn-product__group">
                            <button class="btn btn--product-item-done">Zrobione</button>
                            <button class="btn btn--product-item-remove">Usuń</button>
                            <button class="btn btn--product-item-edit">Edytuj</button>
                        </div>
                    </li>
        `;
    if (count && unit && name && category) {
        elements.productLists.insertAdjacentHTML('beforeend', markup);
        clearInput()
        elements.paraWarning.innerHTML = ''
    } else {
        elements.paraWarning.innerHTML = 'Proszę uzuepłnić wszystkie pola!'
    }
};
import {
    elements
} from './views/base';
// import * as fun from './models/RenderFunctions';

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
})
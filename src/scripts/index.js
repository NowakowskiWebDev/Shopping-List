import {
    elements
} from './views/base';
import * as fun from './models/RenderFunctions';

elements.addBtn.addEventListener('click', e => {
    e.preventDefault();
    fun.renderProducts(elements.inputCount.value, elements.selectUnit.value, elements.inputName.value, elements.inputCategory.value)
})
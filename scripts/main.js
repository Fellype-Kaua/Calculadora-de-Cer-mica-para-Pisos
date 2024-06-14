import { ceramicsPerBox, ceramicsSize, checkInput, roomLength, roomWidth } from './validation.js';
import { calculations } from './calculations.js'


const calcBtn = document.getElementById('calcBtn');


function checkAllFields() {
    checkInput(roomWidth, "Largura do cômodo", "roomWidthError");
    checkInput(roomLength, "Comprimento do cômodo", "roomLengthError");
    checkInput(ceramicsSize, "Tamanho da Cerâmica", "ceramicsSizeError");
    checkInput(ceramicsPerBox, "Quantidade por caixa", "ceramicsPerBoxError");
}

calcBtn.addEventListener('click', checkAllFields);
calcBtn.addEventListener('click', calculations)
import { ceramicsPerBox, ceramicsSize, checkInput, roomLength, roomWidth } from './validation.js';
import { calculations } from './calculations.js'


const calcBtn = document.getElementById('calcBtn');


function checkAllFields() {
    checkInput(roomWidth, "Largura da Sala", "roomWidthError");
    checkInput(roomLength, "Comprimento da Sala", "roomLengthError");
    checkInput(ceramicsSize, "Tamanho das Cerâmicas", "ceramicsSizeError");
    checkInput(ceramicsPerBox, "Cerâmicas por Caixa", "ceramicsPerBoxError");
}

calcBtn.addEventListener('click', checkAllFields);
calcBtn.addEventListener('click', calculations)
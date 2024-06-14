import { resultSection } from "./calculations.js"; // Importe resultSection corretamente

export let validationOK = false;

export const roomWidth = document.getElementById('roomWidth');
export const roomLength = document.getElementById('roomLength');
export const ceramicsSize = document.getElementById('ceramicsSize');
export const ceramicsPerBox = document.getElementById('CeramicsPerBox');

export function checkInput(input, fieldName, errorElementId) {
    const labelError = document.getElementById(errorElementId);
    if (input.value.trim() === "" || parseFloat(input.value) <= 0) {
        labelError.innerText = `O campo "${fieldName}" está vazio ou inválido!`;
        labelError.style.display = 'block';
        input.classList.add('is-invalid');
        validationOK = false;
        resultSection.classList.replace('d-block', 'd-none');
    } else {
        labelError.style.display = 'none';
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        console.log(`O campo "${fieldName}" está preenchido corretamente.`);
        validationOK = true;
    }
}

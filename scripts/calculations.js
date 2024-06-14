import { ceramicsPerBox, ceramicsSize, roomLength, roomWidth, validationOK } from "./validation.js";


export const resultSection = document.getElementById('resultSection');
function result(roomAreaValue, ceramicsAreaValue, ceramicsQtdValue, ceramicsBoxQtdValue) {
  const roomSize = document.getElementById("roomSize");
  const ceramicsUnitSize = document.getElementById('ceramicsUnitSize');
  const ceramicsQtd = document.getElementById('ceramicsQtd');
  const ceramicsBoxQtd = document.getElementById('ceramicsBoxQtd');
  roomSize.innerText = roomAreaValue.toFixed(2);
  ceramicsUnitSize.innerText = ceramicsAreaValue.toFixed(2);
  ceramicsQtd.innerText = ceramicsQtdValue;
  ceramicsBoxQtd.innerText = ceramicsBoxQtdValue;
  resultSection.classList.replace('d-none', 'd-block');
}

function calcArea(item1, item2) {
  return parseFloat(item1) * parseFloat(item2);
}

export function calculations() {
  if (validationOK) {
    const ceramicsCMSize = parseFloat(ceramicsSize.value) / 100; // Convertendo para metros
    const roomArea = calcArea(parseFloat(roomWidth.value), parseFloat(roomLength.value));
    const ceramicsArea = calcArea(ceramicsCMSize, ceramicsCMSize);
    const totalCeramics = Math.ceil(roomArea/ceramicsArea);
    const totalCeramicsBox = Math.ceil(totalCeramics/parseFloat(ceramicsPerBox.value))

    result(roomArea, ceramicsArea, totalCeramics, totalCeramicsBox);
  }
}

'use strict';

const numberInput = document.querySelector('.number-input');
const convertBtn = document.querySelector('.convert-button');

const lengthText = document.querySelector('.length-p');
const volumeText = document.querySelector('.volume-p');
const massText = document.querySelector('.mass-p');

// Theme changer variable
const themeChangerBtn = document.querySelector('.theme-changer');
const outputContainer = document.querySelector('.output-container');
const unitContainerNodes = document.querySelectorAll('.unit-container');
const unitTypeNodes = document.querySelectorAll('.unit-type');
const answerTextNodes = document.querySelectorAll('.answer-text');

convertBtn.addEventListener('click', function () {
  // Length
  lengthText.textContent = `${Number(numberInput.value)} meters = ${(
    Number(numberInput.value) * 3.281
  ).toFixed(3)} feet | ${Number(numberInput.value)} feet = ${(
    Number(numberInput.value) / 3.281
  ).toFixed(3)} meters`;

  // Volume
  volumeText.textContent = `${Number(numberInput.value)} liters = ${(
    Number(numberInput.value) * 0.264
  ).toFixed(3)} gallons | ${Number(numberInput.value)} gallons = ${(
    Number(numberInput.value) / 0.264
  ).toFixed(3)} liters`;

  // Mass
  massText.textContent = `${Number(numberInput.value)} kilos = ${(
    Number(numberInput.value) * 2.204
  ).toFixed(3)} pounds | ${Number(numberInput.value)} pounds = ${(
    Number(numberInput.value) / 2.204
  ).toFixed(3)} kilos`;
});

numberInput.addEventListener('click', function () {
  numberInput.value = '';
});

themeChangerBtn.addEventListener('click', function () {
  outputContainer.classList.toggle('dark-mode_output-container');

  unitContainerNodes.forEach(div => {
    div.classList.toggle('dark-mode_unit-container');
  });

  unitTypeNodes.forEach(h2 => {
    h2.classList.toggle('dark-mode_unit-type');
  });

  answerTextNodes.forEach(p => {
    p.classList.toggle('dark-mode_answer-text');
  });
});

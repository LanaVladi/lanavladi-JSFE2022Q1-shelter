import { renderCarPicture } from './renderCarPicture';
import { ICars } from '../types';

export const renderCar = ({ id, name, color }: ICars) => {
    return `
    <div class="cars-button">
    <button class="button car-select-btn" id="car-select-btn-${id}" type="button">SELECT</button>
    <button class="button car-remove-btn" id="car-remove-btn-${id}" type="button">REMOVE</button>
    <span class="car-name">${name}</span>
</div>
<div class="track">
    <div class="button-panel">
    <div class="button engine-button" id="start-engine-btn-${id}" type="button">A</div>
    <div class="button engine-button" id="stop-engine-btn-${id}" type="button">B</div>
</div>
<div class="car" id="car-${id}">
    ${renderCarPicture(color)}
</div>
<div class="finish-flag" id="finish-flag-${id}">
<img class="finish-flag-img" src="./assets/flag-svgrepo-com.svg" alt="finish-flag">
</div>
</div>`
};
import { renderCar } from "../car/renderCar";
import getState from "../state";
import { updateStateGarage } from "./updateStateGarage";

export const renderGarageView = async () => {
    const primaryState = await getState();

    const renderGarage = `
<div class="garage-view" id="garage-view">
<h1>GARAGE ${primaryState.carsQuantity}</h1>
<h2>Page #${primaryState.garagePage}</h2>
<div class="garage-view-list">
${primaryState.cars.map((car) => `
<div class="render-car">${renderCar(car)}</div>`).join('')}
</div>
</div>
<!-- <div class="win-message" id="win-message"></div> -->
`;
    await updateStateGarage();

    const content = document.querySelector('.content') as HTMLDivElement;

    return content.innerHTML = renderGarage;
};
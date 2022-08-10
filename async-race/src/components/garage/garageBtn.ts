import { renderGarageView } from "./renderGarage";
import { generateRandomCars } from "../utils";
import { createCar } from "../api";
import { updateStateGarage } from "./updateStateGarage";
import { IEntries } from "../types";

export const createCarsBtn = async () => {
    await renderGarageView();
    const formCarCreate = document.querySelector("#form-create-car") as HTMLFormElement;
    formCarCreate.addEventListener('submit', async (event: Event) => {
        event?.preventDefault();

        const target = event.target as HTMLFormElement;
        const inputs = Array.from(target) as HTMLInputElement[];
        const filteredInputs = inputs.filter(({ name }) => Boolean(name));
        const entries = filteredInputs.map(({ name, value }: IEntries) => {
            return [name, value]
        });
        const car = Object.fromEntries(entries);
        await createCar(car);
    })
    await updateStateGarage();

}

export const generateCars = async () => {
    const renderGarageV = await renderGarageView();
    const generateGarageBtn = document.getElementById("cars-generate-btn") as HTMLButtonElement;
    generateGarageBtn.addEventListener('click', async (event: Event) => {
        event?.preventDefault();

        const randomCars = generateRandomCars();
        await Promise.all(randomCars.map(async car => await createCar(car)));
        await updateStateGarage();
        (document.getElementById('garage-view') as HTMLDivElement).innerHTML = renderGarageV;
    })

}
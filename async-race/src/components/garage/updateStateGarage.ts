import { getCars } from "../api";
import getState from "../state";

export async function updateStateGarage() {
    const primaryState = await getState();
    const { cars, carsQuantity } = await getCars(primaryState.garagePage);
    primaryState.carsQuantity = carsQuantity;
    primaryState.cars = cars;

    const quantityCarsPerPage = 7;
    const garagePageQuantity = 1;

    if (primaryState.carsQuantity > primaryState.garagePage * quantityCarsPerPage) {
        (document.getElementById('next-btn') as HTMLButtonElement).removeAttribute('disabled');
    } else {
        (document.getElementById('next-btn') as HTMLButtonElement).setAttribute('disabled', '');
    }
    if (primaryState.garagePage > garagePageQuantity) {
        (document.getElementById('prev-btn') as HTMLButtonElement).removeAttribute('disabled');
    } else {
        (document.getElementById('prev-btn') as HTMLButtonElement).setAttribute('disabled', '');
    }

}


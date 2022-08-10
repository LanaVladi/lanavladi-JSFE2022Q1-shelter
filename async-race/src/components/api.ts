import { ICars, IWinners, IWinnersCars } from "./types";

export const baseUrl = 'http://localhost:3000';

export const garageUrl = `${baseUrl}/garage`;
const engineUrl = `${baseUrl}/engine`;
const winnersUrl = `${baseUrl}/winners`;

export async function getCars(page: number, limit = 7) {
    const response = await fetch(`${garageUrl}?_page=${page}&_limit=${limit}`);
    const cars: ICars[] = await response.json();
    const carsQuantity = Number(response.headers.get('X-Total-Count'));

    return { cars, carsQuantity };
}

export async function getCar(id: number) {
    const response = await fetch(`${garageUrl}/${id}`);
    const car = await response.json();

    return car;
}

export async function createCar(car: ICars) {
    const response = await fetch(`${garageUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    })
    const carCreation = await response.json();

    return carCreation;
}

export const deleteCar = async (id: number) => (await fetch(`${garageUrl}/${id}`, { method: 'DELETE' })).json();

export async function updateCar(id: number, car: ICars) {
    const response = await fetch(`${garageUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    const carUpdate = await response.json();

    return carUpdate;
}

export async function startCarEngine(id: number) {
    const response = await fetch(`${engineUrl}?id=${id}&status=started`);
    const engineStart = await response.json();

    return engineStart;
}

export async function stopCarEngine(id: number) {
    const response = await fetch(`${engineUrl}?id=${id}&status=stopped`);
    const engineStop = await response.json();

    return engineStop;
}

export async function driveModeEngine(id: number) {
    const response = await fetch(`${engineUrl}?id=${id}&status=drive`).catch();
    const engineStop = await response.json();

    return response.status !== 200 ? { "success": false } : { engineStop };
}


// ================ Winners view ==================== //

export async function getWinners(page: number, limit = 10, sortByWinsTime: string, sortByAscDesc: string) {
    const response = await fetch(`${winnersUrl}?_page=${page}&_limit=${limit}&_sort=${sortByWinsTime}$__order=${sortByAscDesc}`);
    const winners: IWinnersCars[] = await response.json();
    const winnersQuantity = Number(response.headers.get('X-Total-Count'));

    return {
        winners: await Promise.all(winners.map(async (winner) => Object.assign({ ...winner, car: await getCar(winner.id) }, winner))),
        winnersQuantity
    };
}

export async function getWinner(id: number) {
    const response = await fetch(`${winnersUrl}/${id}`);
    const winner = await response.json();

    return winner;
}

export const getWinnerStatus = async (id: number) => (await fetch(`${winnersUrl}/${id}`)).status;

export async function createWinner(winner: IWinners) {
    const response = await fetch(`${winnersUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(winner),
    })
    const winnersCreation = await response.json();

    return winnersCreation;
}

export const deleteWinner = async (id: number) => (await fetch(`${winnersUrl}/${id}`, { method: 'DELETE' })).json();

export async function updateWinner(id: number, winner: IWinners) {
    const response = await fetch(`${winnersUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(winner),
    });
    const winnerUpdate = await response.json();

    return winnerUpdate;
}
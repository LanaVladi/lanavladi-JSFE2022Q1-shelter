import { getCars, getWinners } from './api';
import { IPrimaryState } from './types';

export default async function getState () {
const { cars, carsQuantity } = await getCars(1);
const { winners, winnersQuantity } = await getWinners(1, 10, 'wins', 'asc');

const primaryState: IPrimaryState = {
    view: 'garage-view',
    garagePage: 1,
    winnersPage: 1,
    cars,
    winners,
    carsQuantity,
    winnersQuantity,
    animation: {},
    sortByWinsTime: 'wins',
    sortByAscDesc: 'asc',
}
return primaryState;
}


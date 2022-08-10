import { getWinners } from "../api";
import getState from "../state";

export async function updateStateWinners() {
    const primaryState = await getState();
    const { winners, winnersQuantity } = await getWinners(primaryState.winnersPage, 10, primaryState.sortByWinsTime, primaryState.sortByAscDesc);
    primaryState.winnersQuantity = winnersQuantity;
    primaryState.winners = winners;

    const quantityWinnersPerPage = 10;
    const winnersPageQuantity = 1;

    if (primaryState.winnersQuantity > primaryState.winnersPage * quantityWinnersPerPage) {
        (document.getElementById('next-btn') as HTMLButtonElement).removeAttribute('disabled');
    } else {
        (document.getElementById('next-btn') as HTMLButtonElement).setAttribute('disabled', '');
    } winnersPageQuantity
    if (primaryState.garagePage !== winnersPageQuantity) {
        (document.getElementById('prev-btn') as HTMLButtonElement).removeAttribute('disabled');
    } else {
        (document.getElementById('prev-btn') as HTMLButtonElement).setAttribute('disabled', '');
    }

}
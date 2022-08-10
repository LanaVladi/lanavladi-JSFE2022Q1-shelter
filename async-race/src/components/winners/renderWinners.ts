import { renderCarPicture } from "../car/renderCarPicture";
import getState from "../state";

export const renderWinnersView = async () => {
    const primaryState = await getState();
    let sortByWinsTime = primaryState.sortByWinsTime === 'wins' ? primaryState.sortByAscDesc : '';
    sortByWinsTime = primaryState.sortByWinsTime === 'time' ? primaryState.sortByAscDesc : '';

    const renderWinners = `
    <h1>Winners ${primaryState.winnersQuantity}</h1>
    <h2>Page #${primaryState.winnersPage}</h2>
    <table class="winner-view-table">
        <thead>
        <th class="winners-place"><button table-btn>Place</button></th>
        <th class="winners-car-img"><button table-btn>Car</button></th>
        <th class="winners-car-name"><button table-btn>Name</button></th>
        <th class="winners-wins-btn-sort" ${sortByWinsTime}><button table-btn>Wins</button></th>
        <th class="winners-time-btn-sort" ${sortByWinsTime}><button table-btn>Best time(seconds)</button></th>
    </thead>
    <tbody>
    ${primaryState.winners.map((winner, ind) => `
    <tr>
        <td> ${ind + 1} </td>
            <td>${renderCarPicture(winner.car.color)}</td>
                <td>${winner.car.name}</td>
                    <td>${winner.wins}</td>
                        <td>${winner.time}</td>
                        </tr>`).join('')}
                            </tbody>
                            </table>
                                `;
    const content = document.querySelector('.content') as HTMLDivElement;

    return content.innerHTML = renderWinners;

}
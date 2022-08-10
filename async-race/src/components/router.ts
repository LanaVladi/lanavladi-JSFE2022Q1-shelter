import { renderGarageView } from "./garage/renderGarage";
import { renderWinnersView } from "./winners/renderWinners";

export const route = async (location: string) => {
    const content = document.querySelector('.content') as HTMLDivElement;
    const hideBtnInWinners = document.getElementById('top-garage-btn') as HTMLDivElement;
    const renderGarageV = await renderGarageView();
    const renderW = await renderWinnersView();

    switch (location) {
        case '#/garage/':
            content.innerHTML = renderGarageV;
            hideBtnInWinners.style.display = 'block';
            break;
        case '#/winners/':
            content.innerHTML = renderW;
            hideBtnInWinners.style.display = 'none';
            break;
        default:
            content.innerHTML = renderGarageV;
            break;
    }
}

window.addEventListener('load', () => {
    const location = window.location.hash;
    if (location) {
        route(location);
    }
});
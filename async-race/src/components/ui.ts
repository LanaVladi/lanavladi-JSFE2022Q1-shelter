import { route } from './router';

export const renderViews = () => {
    document.body.insertAdjacentHTML('beforebegin', `

    <!-- Header root (always visible) -->
    <nav class="switch-view">
    <a href="#/garage/"><button class="button garage-view-btn" type="button">TO GARAGE</button></a>
    <a href="#/winners/"><button class="button winners-view-btn" type="button">TO WINNERS</button></a>
</nav>

<!-- Page root (content show when garage view & hide when winners view ) -->
<div class="top-garage-btn" id="top-garage-btn">
<div class="options-line">
        <form class="form-create-car" id="form-create-car">
        <label for="create-car-name"></label>
            <input class="create-car-search-input" id="create-car-name" name="name" type="text" placeholder="Choose a car..." autofocus autocomplete="off">
            <input class="create-car-color-input" id="create-car-color" name="color" type="color" value="#edeeae">
            <button class="button car-create-btn" type="submit">CREATE</button>
        </form>
    </div>

    <div class="options-line">
        <form id="update-car">
        <label for="update-car-name"></label>
            <input class="update-car-search-input" id="update-car-name" type="text" placeholder="Choose a car..." autofocus autocomplete="off">
            <input class="update-car-color-input" id="update-car-color" type="color" value="#edeeae">
            <button class="button car-update-btn" id="car-update-btn" type="submit">UPDATE</button>
        </form>
    </div>

    <div class="options-line">
        <button class="button car-race-btn" id="car-race-btn" type="submit">RACE</button>
        <button class="button car-reset-btn" id="car-reset-btn" type="reset">RESET</button>
        <button class="button cars-generate" id="cars-generate-btn" type="submit">GENERATE CARS</button>
    </div>
    </div>

          <!-- Page root (content rendered based on URL) -->
    <div class="content" id="content"></div>

    <!-- Footer root (always visible) -->
    <div class="pagination-btn">
        <button class="button prev-btn" id="prev-btn" type="button" disabled>PREV</button>
        <button class="button next-btn" id="next-btn" type="button" disabled>NEXT</button>
    </div>
    `);

    const garageBtn = document.querySelector('.garage-view-btn') as HTMLButtonElement;
    garageBtn.addEventListener('click', () => {
        route('#/garage/');
    })

    const winnersBtn = document.querySelector('.winners-view-btn') as HTMLButtonElement;
    winnersBtn.addEventListener('click', () => {
        route('#/winners/');
    })
}
// import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './components/nouislider.css';

import * as rangeFilter from './rangeFilter';

import './global.css';
import './components/header.css';
import './components/books.css';
import './components/filters.css';
import './components/footer.css';
import './components/reset.css';

import { booksList } from './utils';
import { IBooksList } from './types';


console.log('qSlider.noUiSlider?.get() :', rangeFilter.qSlider.noUiSlider?.get());

const searchBoxForm = document.querySelector('.search-box') as HTMLFormElement;
const searchInput = document.querySelector('.input') as HTMLInputElement;
const searchCloseBtn = document.querySelector('.search-btn-close') as HTMLButtonElement;

// Обработка запроса через поле ввода (форму (инпут) живой поиск)
(document.querySelector('.input') as HTMLInputElement).oninput = function () {
    const query = searchInput.value.trim();
    console.log('query :', query);
    getDataSearchByAuthor(query);
};

function getDataSearchByAuthor(query: string) {
    removeBooks();
    const books = booksList.filter((book) => {
        if (book.author.toLowerCase().includes(query.toLowerCase())) {
            return true;
        }
        return false
    });
    // console.log('books :', books);
    // console.log('typeof books :', typeof books);
    renderBooks(books);
}

const booksContainer = document.querySelector('.books-container') as HTMLDivElement;

function renderBooks(books: IBooksList[]) {
    if (!books.length) {
        return noBookMatches();
    }
    books.forEach((item) => {

        if (document.querySelector('.books-container') !== null) {
            booksContainer.insertAdjacentHTML('beforeend',
                `<div class="books-card">
        <img class="img-container__img" src="${item.image}" alt="${item.bookName}">
        <h5 class="book-name">${item.bookName}</h5>
        <p class="book-author">${item.author}</p>
        <p class="price">${item.price} руб.</p>
        <p class="publishing-house">Издательство ${item.publishingHouse}</p>
        <p class="publication-date">Дата издания ${item.publicationYear}</p>
        <p class="quantity-in-stock">Количество ${item.quantityInStock}</p>
        <p class="is-popular">Популярная ${item.isPopular}</p>
        <button class="buy-btn" >Купить</button>
    </div>`);
        }
    })
}
renderBooks(booksList);

function noBookMatches() {
    removeBooks();
    booksContainer.insertAdjacentHTML('beforeend',
        `<div class="no-book-matches">Извините, совпадений не найдено</div>`);
}

// ///////////////////// Удаление картинок на странице перед показом новых
function removeBooks() {
    booksContainer.innerHTML = '';
    //   console.log(booksContainer);
}

searchCloseBtn.addEventListener('click', () => {
    searchInput.value = ''; /// если значение в инпуте = ничто, то ...=>
    booksContainer.innerHTML = '';
    renderBooks(booksList);
});

//////////// Очищаем поля формы вручную посимвольно Backspace
searchBoxForm.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        (searchInput.value.substring(0, (searchInput.value.length - 1)))
    }
});
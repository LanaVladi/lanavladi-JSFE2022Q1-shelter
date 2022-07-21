import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './components/nouislider.css';

// CREATE SLIDER by PRICE

export const pSlider = document.getElementById('p-slider') as noUiSlider.target;
export const pSliderCreate = noUiSlider.create(pSlider, {
    start: [0, 1000],
    connect: true,
    orientation: 'horizontal',
    tooltips: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1000
    },
    format: {
        to: function (value) {
            return Math.round(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});


pSlider.noUiSlider?.on('change', (values, handle) => {
    console.log('pSlider handle :', handle);  // 0 - левая ручка, 1- правая
    console.log('pSlider values :', values); // массив занчений
    // const valuePSlider = values[handle].value;
    // console.log('valuePSlider :', valuePSlider);
    // (values[handle]).value = values[handle];
    // console.log('values[handle].value :', values[handle].value);
    // console.log('pSlider.noUiSlider?.get() :', pSlider.noUiSlider?.get());
    // console.log('pSlider.noUiSlider?.set() :', pSlider.noUiSlider?.set);

});

// const inputs = [input-0, input-1];
// pSlider.noUiSlider?.on('update', (values, handle) => {
// });

// CREATE SLIDER by QUANTITY IN STOCK
export const qSlider = document.getElementById('q-slider') as noUiSlider.target;
export const qSliderCreate = noUiSlider.create(qSlider, {
    start: [0, 20],
    connect: true,
    orientation: 'horizontal',
    tooltips: true,
    step: 1,
    range: {
        'min': 0,
        'max': 20
    },
    format: {
        to: function (value) {
            return Math.round(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});

// следим за изменениями ползунка
qSlider.noUiSlider?.on('change', () => {
    // console.log('qSlider handle :', handle);
    // console.log('qSlider values :', values);
    const qSliderValues = (<noUiSlider.API>qSlider.noUiSlider);
    console.log('qSliderValues :', qSliderValues);
    // values = localStorage.getItem('valuesQSlider');
    // const qSliderGet = qSlider.noUiSlider?.get();
    // console.log('qSliderGet :', qSliderGet);
    console.log('qSlider.noUiSlider?.get() :', qSlider.noUiSlider?.get());
    // console.log('qSlider.noUiSlider?.set() :', qSlider.noUiSlider?.set(values));
});


//   ================= // save data of range filtres on localStorage

//    localStorage.setItem('qsliderRange Set local storage', JSON.stringify(qSlider.noUiSlider?.get()));

//   ================= // save data of range filtres on localStorage

//    localStorage.getItem();

//    localStorage.setItem('qsliderRange', JSON.stringify(qSliderGet));


// BUTTON RESET
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;

resetBtn.onclick = (e) => {
    pSlider.noUiSlider?.reset();
    qSlider.noUiSlider?.reset();
}



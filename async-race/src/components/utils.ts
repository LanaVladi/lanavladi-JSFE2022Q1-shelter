import { ICars } from "./types";

const carName = ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Citroen', 'Datsun', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Koenigsegg', 'Lamborghini', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes', 'Mini', 'Mitsubishi', 'Nissan', 'Peugeot', 'Porsche', 'Skoda', 'Subaru', 'Tesla'];

const carModels = ['Durango', 'Spider', 'Virage', 'S5', 'Azure', 'Cabriolet Baur', 'Chiron', 'Skylark', 'Escalade', 'C3 Picasso', '260Z', 'Aries', 'Roma', 'Freemont', 'Mondeo', 'Crosstour', 'H3T', 'Sonata', 'G Cabrio', 'XFR', 'Wrangler', 'Cadenza', 'CC8S', 'Diablo', 'SC',
    'Zephyr', 'Evora', 'Quattroporte', 'DS7 Zeppelin', 'CX-5', '570S', 'GLA', 'ADO15/20', 'Outlander', 'Terrano', 'Landtrek', '911 Carrera', 'Kodiaq',
    'Impreza', 'Semi'];

export const getRandomCar = () => {
    const random = Math.round(Math.random() * (carModels.length - 1))
    const randomCarModel = carModels[random];
    const randomCarName = carName[random];

    return `${randomCarName} ${randomCarModel}`;
}

export const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    return `${color}`;
}

export const generateRandomCars = (carQuantityPerGenerate = 100): ICars[] => {
    return new Array(carQuantityPerGenerate).fill(0).map((car: ICars) => {
        car = { name: getRandomCar(), color: getRandomColor() }

        return car;
    });
}
import './style.css';
import { renderViews } from './components/ui';
import { createCarsBtn, generateCars } from './components/garage/garageBtn';

generateCars();
createCarsBtn();
renderViews();
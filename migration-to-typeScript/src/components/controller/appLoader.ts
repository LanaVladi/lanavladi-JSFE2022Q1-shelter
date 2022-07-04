import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'a32fe19ad6754b2a8ee089da70f56554',  // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

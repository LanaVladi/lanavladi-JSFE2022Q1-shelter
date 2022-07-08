import { apiKey, baseLink } from '../../utils';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(baseLink, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;

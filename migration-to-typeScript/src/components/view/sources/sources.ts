import './sources.css';
import { IDataSources } from '../../../types';

class Sources {
  public draw(data: Array<IDataSources>): void {
        const fragment = document.createDocumentFragment()  as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp')  as HTMLTemplateElement | null;
            if (sourceItemTemp === null) {
                throw new Error('Could not find element.');
            }
        data.forEach((item: IDataSources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;

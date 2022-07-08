import './news.css';
import { IDataNewsArticles } from "../../../types";

class News {
  public draw(data: Array<IDataNewsArticles>): void {
    const quantityNewsPerPage = 10;
        const news = data.length >= quantityNewsPerPage ? data.filter((_item, idx) => idx < quantityNewsPerPage) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        if (newsItemTemp === null) {
          throw new Error('Could not find element.');
      }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.png'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLLIElement).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLLIElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLLinkElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '' as string;
        (document.querySelector('.news') as HTMLElement).appendChild(fragment) as DocumentFragment;
    }
}

export default News;
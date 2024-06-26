import Page from '../core/templates/page';
import { ErrorTypes, Event, PageIds } from '../core/ts/enum';
import { Main, Header } from '../core/layouts';
import { GaragePage, WinnersPage, ErrorPage } from '../pages/index';
import Store from '../core/store';

class App {
  private static body: HTMLElement = document.body;
  private static url: string | null = PageIds.Default;
  private static main: Main = new Main('main', 'main');
  private static header: Header = new Header('header', 'header');

  static renderNewPage(idPage: string): void {
    if (App.url) {
      App.url = null;
    }
    let page: Page | null = null;
    switch (idPage) {
      case PageIds.Garage:
        page = new GaragePage(idPage);
        App.url = idPage;
        break;
      case PageIds.Winners: {
        page = new WinnersPage(idPage);
        App.url = idPage;
        const event = Store.getFromEvent('event');
        if (!event) throw new Error('Event is undefined');
        if (Store.getIsClickedRace()) {
          event.notify(Event.reset);
        }
        break;
      }
      default:
        page = new ErrorPage(idPage, ErrorTypes.Error_404);
        App.url = idPage;
        break;
    }

    if (page) {
      (async () => {
        const pageHTML = await page.render();
        App.url = PageIds.Default;
        App.main.rerender().append(pageHTML);
      })();
    }
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  generatePage(): void {
    const wrapper = document.createElement('div');
    wrapper.classList.add('page-wrapper');
    wrapper.append(App.header.render());
    wrapper.append(App.main.render());
    App.body.append(wrapper);
  }

  run(): void {
    this.generatePage();
    this.enableRouteChange();
    window.location.hash = PageIds.Garage;
    App.renderNewPage(PageIds.Garage);
  }
}

export default App;

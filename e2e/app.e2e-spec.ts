import { ObosearchPage } from './app.po';

describe('obosearch App', () => {
  let page: ObosearchPage;

  beforeEach(() => {
    page = new ObosearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ReporterPage } from './app.po';

describe('reporter App', () => {
  let page: ReporterPage;

  beforeEach(() => {
    page = new ReporterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

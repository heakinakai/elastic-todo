import { ElasticToDoPage } from './app.po';

describe('elastic-to-do App', function() {
  let page: ElasticToDoPage;

  beforeEach(() => {
    page = new ElasticToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('et works!');
  });
});

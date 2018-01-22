import { DragNDropPage } from './app.po';

describe('drag-n-drop App', function() {
  let page: DragNDropPage;

  beforeEach(() => {
    page = new DragNDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

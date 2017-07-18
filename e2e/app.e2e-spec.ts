import { ToastdivPage } from './app.po';

describe('toastdiv App', () => {
  let page: ToastdivPage;

  beforeEach(() => {
    page = new ToastdivPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

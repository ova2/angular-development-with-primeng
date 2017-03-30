import { PrimengAngularcliSetupPage } from './app.po';

describe('primeng-angularcli-setup App', () => {
  let page: PrimengAngularcliSetupPage;

  beforeEach(() => {
    page = new PrimengAngularcliSetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

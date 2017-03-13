import { browser, by, element } from 'protractor';

describe('Test with protractor', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Studying angular 2 with Tour of Heroes provided by Google';
    expect(subject).toEqual(result);
  });

});

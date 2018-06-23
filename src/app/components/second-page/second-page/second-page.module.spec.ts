import { SecondPageModule } from './second-page.module';

describe('SecondPageModule', () => {
  let secondPageModule: SecondPageModule;

  beforeEach(() => {
    secondPageModule = new SecondPageModule();
  });

  it('should create an instance', () => {
    expect(secondPageModule).toBeTruthy();
  });
});

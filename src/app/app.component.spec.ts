import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { OrderAccumulatorService } from '../services/order-accumulator.service';


describe('AppComponent', () => {
  let orderServiceSpy: jasmine.SpyObj<OrderAccumulatorService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // default test cases, app render
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'OrderGenerator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('OrderGenerator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, OrderGenerator');
  });

  // specific tests

});

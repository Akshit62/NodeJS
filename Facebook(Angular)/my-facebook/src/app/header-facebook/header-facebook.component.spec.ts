import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFacebookComponent } from './header-facebook.component';

describe('HeaderFacebookComponent', () => {
  let component: HeaderFacebookComponent;
  let fixture: ComponentFixture<HeaderFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

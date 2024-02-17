import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthurComponent } from './authur.component';

describe('AuthurComponent', () => {
  let component: AuthurComponent;
  let fixture: ComponentFixture<AuthurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

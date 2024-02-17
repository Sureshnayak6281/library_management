import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateupdateauthurComponent } from './createupdateauthur.component';

describe('CreateupdateauthurComponent', () => {
  let component: CreateupdateauthurComponent;
  let fixture: ComponentFixture<CreateupdateauthurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateupdateauthurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateupdateauthurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

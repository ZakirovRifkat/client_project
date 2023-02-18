import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserInfoComponent } from './main-user-info.component';

describe('MainUserInfoComponent', () => {
  let component: MainUserInfoComponent;
  let fixture: ComponentFixture<MainUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainUserInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetricsComponent } from './add-metrics.component';

describe('AddMetricsComponent', () => {
  let component: AddMetricsComponent;
  let fixture: ComponentFixture<AddMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMetricsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyStatsComponent } from './efficiency-stats.component';

describe('EfficiencyStatsComponent', () => {
  let component: EfficiencyStatsComponent;
  let fixture: ComponentFixture<EfficiencyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficiencyStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfficiencyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

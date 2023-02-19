import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsStatsComponent } from './incidents-stats.component';

describe('IncidentsStatsComponent', () => {
  let component: IncidentsStatsComponent;
  let fixture: ComponentFixture<IncidentsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
